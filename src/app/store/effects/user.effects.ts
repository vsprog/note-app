import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';

import * as UserActions from '../actions/user.actions';
import { User } from '../../models/user.model';

import {switchMap, map, mergeMap, catchError, exhaustMap} from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { of } from 'rxjs/observable/of';

type Action = UserActions.All;

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService) {}

    @Effect()
    getUser$: Observable<Action> = this.actions$.pipe(
      ofType(UserActions.GET_USER),
      mergeMap(action => {
        return this.authService.getUser().pipe(
          map(authData => {
            if (authData) {
              const user = new User(authData.uid, authData.displayName, authData.photoURL);
              return new UserActions.Authenticated(user);
            } else {
                return new UserActions.NotAuthenticated();
            }
          }),
          catchError(err => of(new UserActions.AuthError({error: err.message})))
        );
      })
    );

    @Effect()
    loginGoogle$: Observable<Action> = this.actions$.pipe(
      ofType(UserActions.GOOGLE_LOGIN),
      mergeMap(action => {
        return this.authService.googleLogin().pipe(
          map(credential => {
            return new UserActions.GetUser();
          }),
          catchError(err => of(new UserActions.AuthError({error: err.message})))
        );
      })
    );

    @Effect({dispatch: false})
    loginEmail$: Observable<Action> = this.actions$.pipe(
      ofType(UserActions.EMAIL_LOGIN),
      map((action: UserActions.EmailLogin) => action.payload),
      exhaustMap(payload => {
        this.authService.emailLogin(payload);
        return of(null);
      }),
      catchError(err => of(new UserActions.AuthError({error: err.message})))
    );

    @Effect()
    signUp$ = this.actions$.pipe(
      ofType(UserActions.SIGN_UP),
      map((action: UserActions.SignUp) => action.payload),
      mergeMap(payload => {
        return this.authService.signUp(payload).pipe(
          map(credential => new UserActions.UpdateProfile(payload)),
          catchError(err => of(new UserActions.AuthError({error: err.message})))
        );
      })
    );

    @Effect()
    updateProfile$ = this.actions$.pipe(
      ofType(UserActions.UPDATE_PROFILE),
      map((action: UserActions.UpdateProfile) => action.payload),
      mergeMap(payload => {
        return this.authService.updateProfile(payload).pipe(
          map(credential => new UserActions.GetUser()),
          catchError(err => of(new UserActions.AuthError({error: err.message})))
        );
      })
    );

    @Effect()
    logout$: Observable<Action> = this.actions$.pipe(
      ofType(UserActions.LOGOUT),
      map((action: UserActions.Logout) => action.payload),
      map(payload => {
        this.authService.logout();
        return new UserActions.NotAuthenticated();
      })
    );
}

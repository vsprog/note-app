import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/index';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<fromRoot.State>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // return this.store.select(fromRoot.getUser).pipe(
    //   switchMap(() => of(true)),
    //   catchError(() => {
    //     this.router.navigateByUrl('/cards/login');
    //     return of(false);
    //   })
    // );
    return this.store.select(fromRoot.getUser).pipe(
      map(user => {
        if (user.uid) {
          return true;
        } else {
          this.router.navigateByUrl('/login');
          return false;
        }})
      );
  }
}

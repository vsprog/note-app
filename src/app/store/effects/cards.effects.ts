import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CardService} from '../../services/card.service';

import * as Cards from '../actions/cards';

import {exhaustMap, map, mergeMap, catchError} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CardsEffects {
  constructor(
    private actions$: Actions,
    private cardService: CardService) {}

  @Effect()
  loadCards$ = this.actions$.pipe(
      ofType(Cards.LOAD),
      mergeMap(action => {
          return this.cardService.getCardsList().pipe(
            map(res => new Cards.LoadSuccess(res)),
            catchError(error => of(new Cards.ServerFailure(error))));
          }
      )
  );

  // @Effect()
  // addCards$ = this.actions$.pipe(
  //   ofType(Cards.ADD),
  //   map((action: Cards.Add) => action.payload),
  //     exhaustMap(payload => {
  //       const card = this.cardService.createCard(payload);
  //       if (card.$key) {
  //           return of(new Cards.LoadSuccess([card]));
  //       }
  //     })
  // );
  @Effect({dispatch: false})
  addCards$ = this.actions$.pipe(
    ofType(Cards.ADD),
    map((action: Cards.Add) => action.payload),
    exhaustMap(payload => {
      this.cardService.createCard(payload);
      return of(null);
    })
  );

  @Effect({dispatch: false})
  serverFailure$ = this.actions$.pipe(
      ofType(Cards.SERVER_FAILURE),
      map((action: Cards.ServerFailure) => action.payload),
        exhaustMap(errors => {
            console.log('Server error happened:', errors);
            return of(null);
          }
        )
  );
}

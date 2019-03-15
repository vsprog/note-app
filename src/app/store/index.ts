import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {storeLogger} from 'ngrx-store-logger';
import {environment} from '../../environments/environment';
import * as fromUser from './reducers/user.reducers';
import * as fromCards from './reducers/cards';

export interface State {
  userState: fromUser.State;
  cardsState: fromCards.State;
}

export const reducers: ActionReducerMap<State> = {
  userState: fromUser.reducer,
  cardsState: fromCards.reducer,
};

export function logger(reducer: ActionReducer<State>): any {
    // default, no options
    return storeLogger()(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

export const getUserState = createFeatureSelector<fromUser.State>('userState');
export const getCardsState = createFeatureSelector<fromCards.State>('cardsState');

export const getUser = createSelector(
  getUserState,
  state => state.user
);

export const getError = createSelector(
  getUserState,
  state => state.error
);

export const isLoading = createSelector(
  getUserState,
  state => state.loading
);

export const getCards = createSelector(
    getCardsState,
    state => state.cards
);

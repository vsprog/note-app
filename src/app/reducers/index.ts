import * as fromCards from './cards';
import * as fromUser from './user.reducers';
import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import * as fromRoot from './root';

export interface AppState {
    cardsState: fromCards.State;
    userState: fromUser.State;
}

export interface State extends fromRoot.State {
    appState: AppState;
}

export const reducers = {
    cardsState: fromCards.reducer,
    userState: fromUser.reducer,
};

export const selectAppState = createFeatureSelector<AppState>('appState');

export const getCards = createSelector(
    selectAppState,
    (state: AppState) => state.cardsState.cards // state из reducers/cards.ts
);

export const getUser = createSelector(
    selectAppState,
    (state: AppState) => state.userState.user
);

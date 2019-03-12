import * as fromCards from './cards';
import * as fromUser from './user.reducers';
import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {storeLogger} from 'ngrx-store-logger';
import {environment} from '../../environments/environment';
import * as fromRoot from './root';

export interface AppState {
    cards: fromCards.State;
    user: fromUser.State;
}

export interface State extends fromRoot.State {
    appState: AppState;
}

export const reducers = {
    cards: fromCards.reducer,
    user: fromUser.reducer
};

export const selectAppState = createFeatureSelector<AppState>('appState');

export const getCards = createSelector(
    selectAppState,
    (state: AppState) => state.cards.cards // state из reducers/cards.ts
);

export const getUser = createSelector(
    selectAppState,
    (state: AppState) => state.user.user
);

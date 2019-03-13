import * as fromCards from './cards';
import * as fromUser from './user.reducers';
import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import * as fromRoot from './root';

export interface AppState {
    cards: fromCards.State;
    user: fromUser.State;
    error: fromUser.State;
    loading: fromUser.State;
}

export interface State extends fromRoot.State {
    appState: AppState;
}

export const reducers = {
    cards: fromCards.reducer,
    user: fromUser.reducer,
    error: fromUser.reducer,
    loading: fromUser.reducer,
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

export const isLoading = createSelector(
    selectAppState,
    (state: AppState) => state.user.loading
);

export const getError = createSelector(
    selectAppState,
    (state: AppState) => state.user.error
);

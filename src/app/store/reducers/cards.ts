import * as actionCards from '../actions/cards';
import { Card } from '../../models/card';

export interface State {
    cards: Array<Card>;
}

const initialState: State = {
    cards: []
};

export function reducer(state = initialState, action: actionCards.Actions): State {
    switch (action.type) {
      // case actionCards.ADD:
      //   return {
      //       ...state,
      //       cards: [...state.cards, action.payload]
      //   };
      case actionCards.REMOVE:
        const index = state.cards.map((card) => card.$key).indexOf(action.payload);
        return {
            ...state,
            cards: [...state.cards.slice(0, index), ...state.cards.slice(index + 1)]
        };
      case actionCards.LOAD_SUCCESS:
        return {
            ...state,
            // cards: [...state.cards, ...action.payload]
            cards: action.payload
        };
      default:
        return state;
    }
}

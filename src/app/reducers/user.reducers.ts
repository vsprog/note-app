import * as actionUser from '../actions/user.actions';
import { User } from '../models/user.model';

export interface State {
  user: User;
}

const initialState: State = {
  user: new User(null, 'GUEST'),
};

export function reducer(state = initialState, action: actionUser.All): State {
  switch (action.type) {
    case actionUser.GET_USER:
        return { ...state, user: action.payload };

    case actionUser.AUTHENTICATED:
        return { ...state, user: action.payload };

    case actionUser.NOT_AUTHENTICATED:
        return { ...state, ...initialState };

    case actionUser.GOOGLE_LOGIN:
      return { ...state };

    case actionUser.EMAIL_LOGIN:
      return { ...state };

    case actionUser.AUTH_ERROR:
      return { ...state, user: action.payload };

    case actionUser.LOGOUT:
      return { ...state };

    default:
      return state;
  }
}

import * as actionUser from '../actions/user.actions';
import { User } from '../../models/user.model';

export interface State {
  user: User;
  error?: string;
  loading?: boolean;
}

const initialState: State = {
  user: new User(null, 'GUEST'),
};

export function reducer(state = initialState, action: actionUser.All): State {
  switch (action.type) {
    case actionUser.GET_USER:
        return { ...state, user: action.payload, loading: true };

    case actionUser.AUTHENTICATED:
        return { ...state, user: action.payload, loading: false };

    case actionUser.NOT_AUTHENTICATED:
        return { ...state, ...initialState, loading: false };

    case actionUser.GOOGLE_LOGIN:
      return { ...state, loading: true };

    case actionUser.EMAIL_LOGIN:
      return { ...state, loading: true };

    case actionUser.AUTH_ERROR:
      return { ...state, ...action.payload, loading: false };

    case actionUser.LOGOUT:
      return { ...state, loading: true };

    default:
      return state;
  }
}

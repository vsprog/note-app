import { Action } from '@ngrx/store';

export const GET_USER = '[Auth] Get user';
export const AUTHENTICATED = '[Auth] Authenticated';
export const NOT_AUTHENTICATED = '[Auth] Not Authenticated';
export const GOOGLE_LOGIN = '[Auth] Google login attempt';
export const EMAIL_LOGIN = '[Auth] Email login attempt';
export const SIGN_UP = '[Auth] Register user';
export const LOGOUT = '[Auth] Logout';
export const AUTH_ERROR = '[Auth] Error';

/// Get User AuthState
export class GetUser implements Action {
  readonly type = GET_USER;
  constructor(public payload?: any) {}
}

export class Authenticated implements Action {
  readonly type = AUTHENTICATED;
  constructor(public payload?: any) {}
}

export class NotAuthenticated implements Action {
  readonly type = NOT_AUTHENTICATED;
  constructor(public payload?: any) {}
}

export class AuthError implements Action {
  readonly type = AUTH_ERROR;
  constructor(public payload?: any) {}
}

/// Google Login Actions
export class GoogleLogin implements Action {
  readonly type = GOOGLE_LOGIN;
  constructor(public payload?: any) {}
}

/// Sign up action
export class SignUp implements Action {
  readonly type = SIGN_UP;
  constructor(public payload?: any) {}
}

/// Email Login Actions
export class EmailLogin implements Action {
  readonly type = EMAIL_LOGIN;
  constructor(public payload: any) {}
}

/// Logout Actions
export class Logout implements Action {
  readonly type = LOGOUT;
  constructor(public payload?: any) {}
}

export type All = GetUser | Authenticated | NotAuthenticated | GoogleLogin | EmailLogin | AuthError | Logout | SignUp;

// import { AUTH_COMPANY, TOKEN_VALIDATE, LOGOUT } from '../actions/constants';

const LOGOUT = 'auth/LOGOUT';
export const REFRESH_TOKEN = 'auth/REFRESH_TOKEN';
export const SET_USER_DATA = 'auth/SET_USER_DATA';
export const SET_AUTHORIZED = 'auth/SET_AUTHORIZED';
export const SET_UNAUTHORIZED = 'auth/SET_UNAUTHORIZED';

const initialState = {
  authLoading: 0,
  authenticated: 0,
  authenticating: 1,
  token: null,
  refreshToken: null,
  user: null,
};

const authReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_AUTHORIZED:
      return {
        ...state,
        authenticated: 1,
        authenticating: 0,
      };
    case SET_UNAUTHORIZED:
      return {
        ...state,
        authenticated: 0,
        authenticating: 0,
      };
    case LOGOUT:
      return {
        ...state,
        authenticating: 0,
        authenticated: 0,
        token: null,
        refreshToken: null,
        user: null,
      };

    case REFRESH_TOKEN:
      return {
        ...state,
        token: payload.token,
        refreshToken: payload.refreshToken,
      };

    case SET_USER_DATA:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};

export default authReducer;

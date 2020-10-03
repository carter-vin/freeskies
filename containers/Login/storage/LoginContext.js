import { createContext, useReducer, useState } from 'react';

// Actions Type
export const SET_LOADING = 'auth/SET_LOADING';
export const SET_AUTHORIZATION = 'auth/SET_AUTHORIZATION';

const initialState = {
  loading: false,
  token: null,
  refreshToken: null,
  userData: null,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case SET_LOADING: {
      return { ...state, loading: payload };
    }
    case SET_AUTHORIZATION:
      return {
        ...state,
        userData: payload.userData,
        token: payload.token,
        refreshToken: payload.refreshToken,
      };
    default:
      return state;
  }
}

export const LoginContext = createContext([{}, () => {}]);

export const LoginProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

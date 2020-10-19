// Actions Type
export const SET_LOADING = 'auth/SET_LOADING';
export const SET_AUTHORIZATION = 'auth/SET_AUTHORIZATION';

// Actions func
export const setLoading = (state) => {
  return {
    type: SET_LOADING,
    payload: state,
  };
};

export const setAuthorization = (data) => {
  const modifyData = {
    token: data.token,
    refreshToken: data.refreshToken,
    userData: data.userData,
  };

  return {
    type: SET_AUTHORIZATION,
    payload: modifyData,
  };
};

// ================
// Context for User
// ================
import { createContext, useReducer, useState } from 'react';

const initialState = {
  loading: true,
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
        loading: false,
        userData: payload.userData,
        token: payload.token,
        refreshToken: payload.refreshToken,
      };

    default:
      return state;
  }
}

export const AuthContext = createContext([{}, () => {}]);

export const AuthProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

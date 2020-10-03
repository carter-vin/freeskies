import { createContext, useReducer, useState } from 'react';

// Actions Type
export const SET_LOADING = 'registration/SET_LOADING';

const initialState = {
  loading: false,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case SET_LOADING: {
      return { ...state, loading: payload };
    }
    default:
      return state;
  }
}

export const RegistrationContext = createContext([{}, () => {}]);

export const RegistrationProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return (
    <RegistrationContext.Provider value={value}>
      {children}
    </RegistrationContext.Provider>
  );
};

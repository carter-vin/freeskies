import { createContext, useReducer } from 'react';

// Actions Type
export const SET_LOADING = 'profile/SET_LOADING';
export const SET_FRIENDS_DATA = 'profile/SET_FRIENDS_DATA';

const initialState = {
  loading: false,
  friendData: [],
};

function reducer(state, { type, payload }) {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload };

    case SET_FRIENDS_DATA:
      return { ...state, friendData: payload };

    default:
      return state;
  }
}

export const ProfileContext = createContext([{}, () => {}]);

export const ProfileProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
};

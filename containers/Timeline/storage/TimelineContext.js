import { createContext, useReducer, useState } from 'react';

// Actions Type
export const SET_LOADING = 'timeline/SET_LOADING';
export const SET_TIMELINE_DATA = 'timeline/SET_TIMELINE_DATA';

const initialState = {
  loading: false,
  timelineData: [],
};

function reducer(state, { type, payload }) {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload };

    case SET_TIMELINE_DATA:
      return { ...state, timelineData: [...state.timelineData, ...payload] };

    default:
      return state;
  }
}

export const TimeLineContext = createContext([{}, () => {}]);

export const TimeLineProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return (
    <TimeLineContext.Provider value={value}>
      {children}
    </TimeLineContext.Provider>
  );
};

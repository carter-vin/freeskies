import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers/rootReducer';

export const makeStore = (context) =>
  createStore(rootReducer, applyMiddleware(logger));

export const wrapper = createWrapper(makeStore, { debug: true });

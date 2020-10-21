import { combineReducers } from 'redux';
import appReducer from './appReducer';
import nextReducer from './nextReducer';

const rootReducer = combineReducers({
  // next: nextReducer,
  app: appReducer,
});

export default rootReducer;

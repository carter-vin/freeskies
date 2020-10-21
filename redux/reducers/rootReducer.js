import { combineReducers } from 'redux';
import appReducer from './appReducer';
import { reducer as modal } from 'redux-modal';

import nextReducer from './nextReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  // next: nextReducer,
  auth: authReducer,
  app: appReducer,
  modal,
});

export default rootReducer;

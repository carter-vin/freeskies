import { combineReducers } from 'redux';
import appReducer from './appReducer';
import { reducer as modal } from 'redux-modal';

import nextReducer from './nextReducer';

const rootReducer = combineReducers({
  // next: nextReducer,
  app: appReducer,
  modal,
});

export default rootReducer;

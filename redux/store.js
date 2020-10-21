import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'remote-redux-devtools';
import reduxStorageMiddleware from '../helpers/middleware/reduxStoreMiddleware';

const enhacer = () => {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  return composeEnhancers(
    applyMiddleware(logger, thunk, reduxStorageMiddleware)
  );
};

export const makeStore = (context) => createStore(rootReducer, enhacer());

export const wrapper = createWrapper(makeStore, { debug: true });
makeStore().dispatch({ type: '@@redux/INIT' });

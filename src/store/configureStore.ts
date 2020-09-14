import {
  compose,
  createStore,
  applyMiddleware,
  Middleware,
  StoreEnhancer,
} from 'redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { ApplicationRootState } from 'types';

import createRootReducer from './reducers';

const history = createBrowserHistory();

const rootReducer = createRootReducer(history);

function configureStore(preloadedState: ApplicationRootState | null) {
  let enhance = null;

  const middlewareRoot: Middleware = routerMiddleware(history);
  const storeEnhancer: StoreEnhancer = applyMiddleware(middlewareRoot);

  if (process.env.NODE_ENV === 'development') {
    enhance = composeWithDevTools(storeEnhancer);
  } else {
    enhance = compose(storeEnhancer);
  }

  const store = createStore(
    rootReducer,
    preloadedState || {},
    enhance,
  );

  return store;
}

export {
  history,
};

export default configureStore;

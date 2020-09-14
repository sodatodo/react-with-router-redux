import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

const createRootReducer = (history: History) => {
  const rootReducer = combineReducers({
    router: connectRouter(history),
  });

  return rootReducer;
};

export default createRootReducer;

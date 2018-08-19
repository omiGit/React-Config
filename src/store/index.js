import {
  createStore, applyMiddleware, compose, combineReducers
} from 'redux';
import createSagaMiddleware from 'redux-saga';

const composeEnhancers = process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : null || compose;

const sagaMiddleware = createSagaMiddleware();


export { sagaMiddleware };
export default createStore(combineReducers({ }),
  composeEnhancers(applyMiddleware(sagaMiddleware)));


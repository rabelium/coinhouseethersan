import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
  compose,
  Store,
  AnyAction,
  Reducer,
} from 'redux';

const middleware = [];

middleware.push(thunk);

const middlewareEnhancer = applyMiddleware(...middleware);
const composedEnhancers = compose(middlewareEnhancer);

export default (reducer: Reducer): Store<any, AnyAction> =>
  createStore(reducer, composedEnhancers);

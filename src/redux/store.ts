import {createStore, applyMiddleware, Middleware, Store} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';
import {IStore} from "./IStore";

export function configureStore(initialState?: IStore): Store<IStore> {

  const middlewares: Middleware[] = [
    thunk,
  ];

  return createStore(rootReducer, initialState, composeWithDevTools(
    applyMiddleware(...middlewares),
  ));

}
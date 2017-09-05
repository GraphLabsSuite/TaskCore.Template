import {createStore, applyMiddleware, Middleware, Store} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/index';
import {IStore} from "./IStore";

export function configureStore(initialState?: IStore): Store<IStore> {

  const middlewares: Middleware[] = [
    thunk,
  ];

  const store = createStore(rootReducer, initialState, composeWithDevTools(
    applyMiddleware(...middlewares),
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
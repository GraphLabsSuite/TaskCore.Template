import * as Redux from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers/rootReducer';
import { IStore } from './IStore';

export function configureStore(initialState?: IStore): Redux.Store<IStore> {

  const middlewares: Redux.Middleware[] = [
    thunk,
  ];

  return Redux.createStore(rootReducer, initialState, composeWithDevTools(
    Redux.applyMiddleware(...middlewares),
  ));

}

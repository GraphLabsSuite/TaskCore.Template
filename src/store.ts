import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import {Store} from "react-redux";

//add type. which parameter S to Store<S>?
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ));

export default store;
import { combineReducers, Reducer } from 'redux';
import { counterReducer } from './counter/index';
import graphReducer from './graph/reducers';
import appReducer from './app/reducers';
import { State as CounterState } from './counter/index';
import { IGraphView } from '../models/graph';
import {reducer as notifierReducer, INotifierStore } from 'graphlabs.core.notifier';
import {App} from "./app";

export interface RootState {
  readonly graph: IGraphView;
  counterState: CounterState;
  notifier: INotifierStore;
  app: App;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  counter: counterReducer,
  graph: graphReducer,
  app: appReducer,
  notifier: notifierReducer
});

export default rootReducer;
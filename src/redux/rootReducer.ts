import { combineReducers, Reducer } from 'redux';
import graphReducer from './graph/reducers';
import appReducer from './app/reducers';
import { IGraphView } from '..';
import {reducer as notifierReducer, INotifierStore } from 'graphlabs.core.notifier';
import { App } from './app';

export interface RootState {
  readonly graph: IGraphView;
  readonly notifier: INotifierStore;
  readonly app: App;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  graph: graphReducer,
  app: appReducer,
  notifier: notifierReducer
} as any);

export default rootReducer;
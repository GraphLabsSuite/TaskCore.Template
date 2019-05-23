import { combineReducers, Reducer } from 'redux';
import graphReducer from './graph/reducers';
import appReducer from './app/reducers';
import matrixReducer from './matrix/reducers';
import { IGraphView, IMatrixView } from '..';
import {reducer as notifierReducer, INotifierStore } from 'graphlabs.core.notifier';
import { App } from './app';

export interface RootState {
  readonly graph: IGraphView;
  readonly matrix: IMatrixView;
  readonly notifier: INotifierStore;
  readonly app: App;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  graph: graphReducer,
  matrix: matrixReducer,
  app: appReducer,
  notifier: notifierReducer
} as any);

export default rootReducer;

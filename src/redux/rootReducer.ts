import {combineReducers, Reducer} from 'redux';
import {counterReducer} from "./counter/index";
import graphReducer from "./graph/reducers";
import { State as CounterState } from "./counter/index";
import {IGraphView} from '../models/graph';

export interface RootState {
  readonly graph: IGraphView,
  counterState: CounterState
}


const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  counter: counterReducer,
  graph: graphReducer
});

export default rootReducer;
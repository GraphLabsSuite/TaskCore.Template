import {combineReducers, Reducer} from 'redux';
import {IStore} from "../types/IStore";
import {counterReducer} from "./counter/index";
import {reducer as graphReducer} from "./graph/reducers";
import { State as GraphState } from "./graph/reducers";
import { State as CounterState } from "./counter/index";

export interface RootState {
  graphState: GraphState,
  counterState: CounterState
}


const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  counter: counterReducer,
  graph: graphReducer
});

export default rootReducer;
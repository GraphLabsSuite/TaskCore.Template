import {combineReducers, Reducer} from 'redux';
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
  graphReducer
});

export default rootReducer;
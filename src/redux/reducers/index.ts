import {combineReducers, Reducer} from 'redux';
import {IStore} from "../IStore";
import {counterReducer} from "./counter/index";

const rootReducer: Reducer<IStore> = combineReducers<IStore>({
  counter: counterReducer
});

export default rootReducer;
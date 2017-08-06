import * as Redux from 'redux';
import { counterReducer } from './counter';
import { IStore } from '../IStore';

const rootReducer: Redux.Reducer<IStore> = Redux.combineReducers<IStore>({
  counter: counterReducer,
});

export default rootReducer;

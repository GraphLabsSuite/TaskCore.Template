import { Reducer } from 'redux';
import { State as CounterState } from './counter/index';
import { IGraphView } from '../models/graph';
import { IIntersectionView } from '../models/intersection';
import { INotifierStore } from 'graphlabs.core.notifier';
import { App } from "./app";
export interface RootState {
    readonly graph: IGraphView;
    intersection: IIntersectionView;
    counterState: CounterState;
    notifier: INotifierStore;
    app: App;
}
declare const rootReducer: Reducer<RootState>;
export default rootReducer;

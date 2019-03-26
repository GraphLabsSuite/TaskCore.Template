import { Reducer } from 'redux';
import { IGraphView } from '..';
import { INotifierStore } from 'graphlabs.core.notifier';
import { App } from './app';
export interface RootState {
    readonly graph: IGraphView;
    readonly notifier: INotifierStore;
    readonly app: App;
}
declare const rootReducer: Reducer<RootState>;
export default rootReducer;

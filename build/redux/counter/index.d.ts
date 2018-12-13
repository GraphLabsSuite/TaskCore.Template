import { ICounter, ICounterAction } from "../../models/counter";
/** Action Types */
export declare const INCREMENT: string;
export declare const DECREMENT: string;
export declare type State = {};
export declare function counterReducer(state?: ICounter, action?: ICounterAction): ICounter;
export declare function increment(): ICounterAction;
export declare function decrement(): ICounterAction;

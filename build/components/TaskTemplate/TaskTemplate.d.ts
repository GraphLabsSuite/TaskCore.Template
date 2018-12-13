/// <reference types="react" />
import * as React from "react";
export interface AppProperties {
    addVertex: (name: string) => void;
    addEdge: (one: string, two: string) => void;
}
export interface AppState extends React.ComponentState {
}
declare const _default: React.ComponentClass<{}>;
export default _default;

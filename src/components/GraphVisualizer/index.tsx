import * as React from 'react';
// { ReadableGraphAdapter, WritableGraphAdapter } from 'graphlabs.core.visualizer';
import {CommonGraphAdapter} from "../..";
import { IGraph, IEdge, IVertex } from "graphlabs.core.graphs";

export interface GVProps {
    adapterType?: string;
    graph: IGraph<IVertex, IEdge>;
}
export class GraphVisualizer extends React.Component<GVProps> {

    /*public render() {
        if (this.props.adapterType == 'writable'){
            return <WritableGraphAdapter
                //graph = {this.props.graph}
            />;
        }
        else if (this.props.adapterType == 'readable' || this.props.adapterType == null) {
            return <ReadableGraphAdapter
                //graph = {this.props.graph}
            />;
        }
    }*/

    public render() {
        if (this.props.adapterType) {
            window.sessionStorage.setItem("adapterType", this.props.adapterType);
        }
        return <CommonGraphAdapter
            graph = {this.props.graph}
        />
    }
}

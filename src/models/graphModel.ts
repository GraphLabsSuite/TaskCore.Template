import {IGraph, IVertex, IEdge} from "graphlabs.core.graphs";

export interface graphModel{
    graph: IGraph<IVertex, IEdge>;
}

export const graphModel = 'graphModel';
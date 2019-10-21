import {IGraph, IVertex, IEdge, Graph} from "graphlabs.core.graphs";

let graphModel:  IGraph<IVertex, IEdge> = new Graph() as unknown as IGraph<IVertex, IEdge>;
let init:(graph: IGraph<IVertex, IEdge>) => void;

init = function (graph: IGraph<IVertex, IEdge>) {
   graphModel = graph;
}

export {init, graphModel};

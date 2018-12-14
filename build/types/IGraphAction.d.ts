import { IEdgeView, IVertexView } from '../models/graph';
export interface IGraphActionVertex {
    type: string;
    vertex: IVertexView;
}
export interface IGraphActionEdge {
    type: string;
    edge: IEdgeView;
}
export declare type IGraphAction = IGraphActionEdge | IGraphActionVertex;

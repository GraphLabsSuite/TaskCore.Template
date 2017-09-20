export interface IGraphView {
  vertices: IVertexView[];
  edges: IEdgeView[]
}

export interface IEdgeView {
  vertexOne: number;
  vertexTwo: number;
}

export interface IVertexView {
  id: number;
  name: string;
}
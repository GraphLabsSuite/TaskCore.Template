"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD_VERTEX = 'graph/ADD_VERTEX';
exports.REMOVE_VERTEX = 'graph/REMOVE_VERTEX';
exports.ADD_EDGE = 'graph/ADD_EDGE';
exports.REMOVE_EDGE = 'graph/REMOVE_EDGE';
// export type Actions = {
//   ADD_VERTEX: {
//     type: typeof ADD_VERTEX,
//     vertice: IVertexView
//   },
//   REMOVE_VERTEX: {
//     type: typeof REMOVE_VERTEX,
//     vertice: IVertexView
//   },
//   ADD_EDGE: {
//     type: typeof ADD_EDGE,
//     edge: IEdgeView
//   },
//   REMOVE_EDGE: {
//     type: typeof REMOVE_EDGE,
//     edge: IEdgeView
//   },
// };
exports.graphActionsCreators = {
    addVertex(name) {
        return {
            type: exports.ADD_VERTEX,
            vertex: { name }
        };
    },
    removeVertex(name) {
        return {
            type: exports.REMOVE_VERTEX,
            vertex: { name }
        };
    },
    addEdge(vertexOne, vertexTwo) {
        return {
            type: exports.ADD_EDGE,
            edge: { vertexOne, vertexTwo }
        };
    },
    removeEdge(vertexOne, vertexTwo) {
        return {
            type: exports.REMOVE_EDGE,
            edge: { vertexOne, vertexTwo }
        };
    }
};
//# sourceMappingURL=actions.js.map
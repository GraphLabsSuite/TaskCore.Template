"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("./actions");
const initialState = {
    vertices: [],
    edges: []
};
exports.default = (state = initialState, action) => {
    switch (action.type) {
        case actions_1.ADD_VERTEX:
            return {
                vertices: [
                    ...state.vertices,
                    action.vertex
                ],
                edges: [
                    ...state.edges
                ]
            };
        case actions_1.REMOVE_VERTEX:
            return {
                vertices: [
                    ...state.vertices
                        .filter(v => v.name !== action.vertex.name),
                ],
                edges: [
                    ...state.edges
                        .filter(e => e.vertexTwo !== action.vertex.name
                        && e.vertexOne !== action.vertex.name)
                ]
            };
        case actions_1.ADD_EDGE:
            return {
                vertices: [
                    ...state.vertices
                ],
                edges: [
                    ...state.edges,
                    action.edge
                ],
            };
        case actions_1.REMOVE_EDGE:
            return {
                vertices: [
                    ...state.vertices
                ],
                edges: [
                    ...state.edges
                        .filter(e => e.vertexOne !== action.edge.vertexOne
                        && e.vertexTwo !== action.edge.vertexTwo),
                ]
            };
        default:
            return state;
    }
};
//# sourceMappingURL=reducers.js.map
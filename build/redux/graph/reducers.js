"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
var initialState = {
    vertices: [],
    edges: []
};
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actions_1.ADD_VERTEX:
            return {
                vertices: state.vertices.concat([
                    action.vertex
                ]),
                edges: state.edges.slice()
            };
        case actions_1.REMOVE_VERTEX:
            return {
                vertices: state.vertices
                    .filter(function (v) { return v.name !== action.vertex.name; }).slice(),
                edges: state.edges
                    .filter(function (e) { return e.vertexTwo !== action.vertex.name
                    && e.vertexOne !== action.vertex.name; }).slice()
            };
        case actions_1.ADD_EDGE:
            return {
                vertices: state.vertices.slice(),
                edges: state.edges.concat([
                    action.edge
                ]),
            };
        case actions_1.REMOVE_EDGE:
            return {
                vertices: state.vertices.slice(),
                edges: state.edges
                    .filter(function (e) { return e.vertexOne !== action.edge.vertexOne
                    && e.vertexTwo !== action.edge.vertexTwo; }).slice()
            };
        default:
            return state;
    }
});
//# sourceMappingURL=reducers.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD_INTERSECTION = 'intersection/ADD_INTERSECTION';
exports.REMOVE_INTERSECTION = 'intersection/REMOVE_INTERSECCTION';
exports.intersectionActionCreators = {
    addIntersection: function (vertexOne, vertexTwo) {
        return {
            type: exports.ADD_INTERSECTION,
            payload: { vertexOne: vertexOne, vertexTwo: vertexTwo }
        };
    },
    removeIntersection: function (vertexOne, vertexTwo) {
        return {
            type: exports.REMOVE_INTERSECTION,
            payload: { vertexOne: vertexOne, vertexTwo: vertexTwo }
        };
    }
};
//# sourceMappingURL=actions.js.map
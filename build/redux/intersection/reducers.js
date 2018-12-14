"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("./actions");
const initialIntersection = {
    pairs: []
};
exports.default = (state = initialIntersection, action) => {
    switch (action.type) {
        case actions_1.ADD_INTERSECTION:
            return {
                pairs: [
                    ...state.pairs,
                    action.payload
                ],
            };
        case actions_1.REMOVE_INTERSECTION:
            return {
                pairs: [
                    ...state.pairs
                        .filter(p => p.vertexOne !== action.payload.vertexOne
                        && p.vertexTwo !== action.payload.vertexTwo),
                ]
            };
        default:
            return state;
    }
};
//# sourceMappingURL=reducers.js.map
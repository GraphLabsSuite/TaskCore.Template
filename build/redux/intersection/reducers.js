"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
var initialIntersection = {
    pairs: []
};
exports.default = (function (state, action) {
    if (state === void 0) { state = initialIntersection; }
    switch (action.type) {
        case actions_1.ADD_INTERSECTION:
            return {
                pairs: state.pairs.concat([
                    action.payload
                ]),
            };
        case actions_1.REMOVE_INTERSECTION:
            return {
                pairs: state.pairs
                    .filter(function (p) { return p.vertexOne !== action.payload.vertexOne
                    && p.vertexTwo !== action.payload.vertexTwo; }).slice()
            };
        default:
            return state;
    }
});
//# sourceMappingURL=reducers.js.map
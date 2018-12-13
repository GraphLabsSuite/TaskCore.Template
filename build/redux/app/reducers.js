"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
var initialState = {
    status: false,
};
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actions_1.SET_STATUS:
            return {
                status: action.payload,
            };
        default:
            return state;
    }
});
//# sourceMappingURL=reducers.js.map
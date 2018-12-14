"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("./actions");
const initialState = {
    status: false,
};
exports.default = (state = initialState, action) => {
    switch (action.type) {
        case actions_1.SET_STATUS:
            return {
                status: action.payload,
            };
        default:
            return state;
    }
};
//# sourceMappingURL=reducers.js.map
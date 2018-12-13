"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Action Types */
exports.INCREMENT = 'counter/INCREMENT';
exports.DECREMENT = 'counter/DECREMENT';
var initialState = {
    count: 0,
};
function counterReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case exports.INCREMENT:
            return {
                count: state.count + 1,
            };
        case exports.DECREMENT:
            return {
                count: ((state.count - 1 > 0) ? state.count - 1 : 0),
            };
        default:
            return state;
    }
}
exports.counterReducer = counterReducer;
function increment() {
    return {
        type: exports.INCREMENT,
    };
}
exports.increment = increment;
function decrement() {
    return {
        type: exports.DECREMENT,
    };
}
exports.decrement = decrement;
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var reducers_1 = require("./graph/reducers");
var reducers_2 = require("./intersection/reducers");
var reducers_3 = require("./app/reducers");
var graphlabs_core_notifier_1 = require("graphlabs.core.notifier");
var rootReducer = redux_1.combineReducers({
    graph: reducers_1.default,
    intersection: reducers_2.default,
    app: reducers_3.default,
    notifier: graphlabs_core_notifier_1.reducer
});
exports.default = rootReducer;
//# sourceMappingURL=rootReducer.js.map
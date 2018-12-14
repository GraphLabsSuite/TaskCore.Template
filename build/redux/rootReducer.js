"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const reducers_1 = require("./graph/reducers");
const reducers_2 = require("./intersection/reducers");
const reducers_3 = require("./app/reducers");
const graphlabs_core_notifier_1 = require("graphlabs.core.notifier");
const rootReducer = redux_1.combineReducers({
    graph: reducers_1.default,
    intersection: reducers_2.default,
    app: reducers_3.default,
    notifier: graphlabs_core_notifier_1.reducer
});
exports.default = rootReducer;
//# sourceMappingURL=rootReducer.js.map
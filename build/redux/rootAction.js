"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Actions as GraphActions } from "./graph/actions";
var actions_1 = require("./graph/actions");
var actions_2 = require("./intersection/actions");
// export type RootAction =
//   GraphActions[keyof GraphActions];
exports.actionsCreators = __assign({}, actions_1.graphActionsCreators, actions_2.intersectionActionCreators);
//# sourceMappingURL=rootAction.js.map
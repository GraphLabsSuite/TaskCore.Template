"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Actions as GraphActions } from "./graph/actions";
const actions_1 = require("./graph/actions");
const actions_2 = require("./intersection/actions");
// export type RootAction =
//   GraphActions[keyof GraphActions];
exports.actionsCreators = Object.assign({}, actions_1.graphActionsCreators, actions_2.intersectionActionCreators);
//# sourceMappingURL=rootAction.js.map
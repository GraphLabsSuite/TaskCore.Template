"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpService_1 = require("../utils/httpService");
exports.loggingService = function (store) { return function (next) { return function (action) {
    var taskId = 123; // Long
    var sessionGuid = 'uuid'; // Guid
    var actions = []; // ActionDescription[]
    var isTaskFinished = false; // bool
    httpService_1.postData('localhost:54446/RegisterUserActions', { taskId: taskId, sessionGuid: sessionGuid, actions: actions, isTaskFinished: isTaskFinished });
    var result = next(action);
    return result;
}; }; };
//# sourceMappingURL=loggingService.js.map
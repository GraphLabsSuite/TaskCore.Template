"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var react_1 = require("react");
var __1 = require("../../");
var Console = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    height: 100%;\n    display: inline-block;\n  }\n"], ["\n  {\n    height: 100%;\n    display: inline-block;\n  }\n"])));
var TaskConsole = /** @class */ (function (_super) {
    __extends(TaskConsole, _super);
    function TaskConsole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TaskConsole.prototype, "actions", {
        get: function () {
            var _this = this;
            var state = __1.store.getState();
            __1.store.subscribe(function () {
                var flag = false;
                __1.store.getState().notifier.studentActions.forEach(function (e, i) {
                    if (_this._action[i] !== e) {
                        flag = true;
                    }
                });
                if (flag) {
                    _this._action = __1.store.getState().notifier.studentActions;
                    _this.forceUpdate();
                }
            });
            this._action = state.notifier.studentActions.slice();
            return this._action;
        },
        enumerable: true,
        configurable: true
    });
    TaskConsole.prototype.render = function () {
        var actions = this.actions.map(function (i, index) {
            var nData = i.datetime;
            var date = new Date(nData);
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            var message = i.message;
            var result = hours + ':' + minutes + ':' + seconds + '  : ' + message;
            return React.createElement("div", { key: index }, result);
        });
        // This is the rest of console
        return (React.createElement(Console, null, actions));
    };
    return TaskConsole;
}(react_1.Component));
exports.TaskConsole = TaskConsole;
var templateObject_1;
//# sourceMappingURL=TaskConsole.js.map
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
var ToolButtonList_1 = require("../ToolButtonList/ToolButtonList");
var styled_components_1 = require("styled-components");
var Title = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    font-size: 100%;\n  }\n"], ["\n  {\n    font-size: 100%;\n  }\n"])));
var TaskToolbar = /** @class */ (function (_super) {
    __extends(TaskToolbar, _super);
    function TaskToolbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskToolbar.prototype.render = function () {
        var Buttons = this.getButtonList();
        return (React.createElement("div", null,
            React.createElement(Title, null, "\u041F\u0430\u043D\u0435\u043B\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432"),
            React.createElement(Buttons, null)));
    };
    TaskToolbar.prototype.getButtonList = function () {
        return ToolButtonList_1.ToolButtonList;
    };
    return TaskToolbar;
}(React.Component));
exports.TaskToolbar = TaskToolbar;
var templateObject_1;
//# sourceMappingURL=TaskToolbar.js.map
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
var __1 = require("../../");
var div = styled_components_1.default.div;
var p = styled_components_1.default.p;
var Mark = p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    font-size: x-large;\n    height: 100%;\n    display: inline-block;\n  }\n"], ["\n  {\n    font-size: x-large;\n    height: 100%;\n    display: inline-block;\n  }\n"])));
var MarkNegative = styled_components_1.default(Mark)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  &&& {\n    color: red;\n  }\n"], ["\n  &&& {\n    color: red;\n  }\n"])));
var MarkPositive = styled_components_1.default(Mark)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  &&& {\n    color: green;\n  }\n"], ["\n  &&& {\n    color: green;\n  }\n"])));
var MarkNeutral = styled_components_1.default(Mark)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  &&& {\n    color: orange;\n  }\n"], ["\n  &&& {\n    color: orange;\n  }\n"])));
var StudentMarkStyle = div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  {\n    height: 100%;\n    display: inline-block;\n  }\n"], ["\n  {\n    height: 100%;\n    display: inline-block;\n  }\n"])));
var StudentMark = /** @class */ (function (_super) {
    __extends(StudentMark, _super);
    function StudentMark(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            mark: __1.store.getState().notifier.score,
            message: ''
        };
        __1.store.subscribe(function () {
            console.log(__1.store.getState().notifier.score);
            if (__1.store.getState().notifier.score !== _this.state.mark) {
                _this.setState({
                    mark: __1.store.getState().notifier.score,
                });
            }
        });
        return _this;
    }
    StudentMark.prototype.render = function () {
        var Par = this.getStyle();
        return (React.createElement("div", { style: { textAlign: 'center' } },
            React.createElement(StudentMarkStyle, null,
                React.createElement(Par, null,
                    this.state.mark,
                    " ",
                    this.state.message))));
    };
    StudentMark.prototype.getStyle = function () {
        if (this.state.mark > 100) {
            return null;
        }
        if (this.state.mark > 75) {
            return MarkPositive;
        }
        if (this.state.mark > 60) {
            return MarkNeutral;
        }
        if (this.state.mark > 0) {
            return MarkNegative;
        }
        return '';
    };
    return StudentMark;
}(React.Component));
exports.StudentMark = StudentMark;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=StudentMark.js.map
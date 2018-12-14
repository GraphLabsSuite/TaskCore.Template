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
var graphlabs_core_notifier_1 = require("graphlabs.core.notifier");
var ToolButton_1 = require("../ToolButton/ToolButton");
var styled_components_1 = require("styled-components");
var store_1 = require("../../redux/store");
var react_1 = require("react");
var actions_1 = require("../../redux/app/actions");
var Tooltip_1 = require("../Tooltip/Tooltip");
var bluebird_1 = require("bluebird");
var ButtonList = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    display: block;\n  }\n"], ["\n  {\n    display: block;\n  }\n"])));
var taskId = 1; // TODO: get it from somewhere
var sessionGuid = 'uuid'; // TODO: get it from somewhere
var ToolButtonList = /** @class */ (function (_super) {
    __extends(ToolButtonList, _super);
    function ToolButtonList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            show: false,
        };
        _this.hide = _this.hide.bind(_this);
        return _this;
    }
    ToolButtonList.prototype.componentWillMount = function () {
        this.toolButtons = {};
    };
    ToolButtonList.prototype.render = function () {
        return this.getList();
    };
    ToolButtonList.prototype.help = function () {
        return 'Test help example';
    };
    ToolButtonList.prototype.beforeComplete = function () {
        return bluebird_1.Promise.resolve({ success: true, fee: 0 });
    };
    ToolButtonList.prototype.dispatch = function (payload) {
        if (process.env.NODE_ENV === 'production') {
            graphlabs_core_notifier_1.addAction(payload).then(function (res) { return store_1.store.dispatch(res); });
        }
        else {
            store_1.store.dispatch(graphlabs_core_notifier_1.addPlainAction(payload));
        }
        return void 0;
    };
    ToolButtonList.prototype.hide = function () {
        this.setState({
            show: false,
        });
    };
    ToolButtonList.prototype.setDefaultButtonList = function () {
        var _this = this;
        var setImg = function (title) {
            return "http://gl-backend.svtz.ru:5000/odata/downloadImage(name='" + title + ".png')";
        };
        var list = {};
        list[setImg('Help')] = function () {
            _this.dispatch({
                message: 'Help required',
                taskId: taskId,
                sessionGuid: sessionGuid,
                isTaskFinished: false,
                fee: 0,
                datetime: Date.now(),
            });
            _this.setState({
                show: true,
            });
        };
        list[setImg('Complete')] = function () {
            _this.beforeComplete().then(function (res) {
                _this.dispatch({
                    message: "Task is done (" + res.fee + ")",
                    taskId: taskId,
                    sessionGuid: sessionGuid,
                    isTaskFinished: false,
                    fee: res.fee,
                    datetime: Date.now(),
                });
                if (res.success) {
                    _this.dispatch({
                        message: 'Task is checked',
                        taskId: taskId,
                        sessionGuid: sessionGuid,
                        isTaskFinished: true,
                        fee: res.fee,
                        datetime: Date.now(),
                    });
                    store_1.store.dispatch(actions_1.actionsCreators.setStatus(true));
                }
            });
        };
        return list;
    };
    ToolButtonList.prototype.getList = function () {
        var _this = this;
        var result = [];
        var defaultList = this.setDefaultButtonList();
        for (var key in defaultList) {
            if (defaultList.hasOwnProperty(key)) {
                result.push(React.createElement("div", { key: key },
                    React.createElement(ToolButton_1.ToolButton, { path: key, listener: defaultList[key] })));
            }
        }
        for (var key in this.toolButtons) {
            if (this.toolButtons.hasOwnProperty(key)) {
                result.push(React.createElement(ToolButton_1.ToolButton, { key: key, path: key, listener: this.toolButtons[key] }));
            }
        }
        return (React.createElement("div", { ref: function (i) {
                _this.bound = i;
            } },
            React.createElement(Tooltip_1.default, { value: this.help(), show: this.state.show, bound: this.bound, showTooltip: this.hide }),
            React.createElement(ButtonList, null, result)));
    };
    return ToolButtonList;
}(react_1.Component));
exports.ToolButtonList = ToolButtonList;
var templateObject_1;
//# sourceMappingURL=ToolButtonList.js.map
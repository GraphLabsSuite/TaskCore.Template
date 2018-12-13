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
var GraphVisualizer_1 = require("../GraphVisualizer/GraphVisualizer");
var TaskToolbar_1 = require("../TaskToolbar/TaskToolbar");
var TaskConsole_1 = require("../TaskConsole/TaskConsole");
var graphlabs_core_graphs_1 = require("graphlabs.core.graphs");
var StudentMark_1 = require("../StudentMark/StudentMark");
var actions_1 = require("../../redux/graph/actions");
var styled_components_1 = require("styled-components");
var react_1 = require("react");
require("bootstrap/dist/css/bootstrap.css");
var __1 = require("../../");
var bluebird_1 = require("bluebird");
global.Promise = bluebird_1.Promise;
var BorderedDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    box-shadow:2px 2px 11px rgba(0, 0, 0, 0.5);\n    -webkit-box-shadow:2px 2px 11px rgba(0, 0, 0, 0.5);\n    border-radius: 10px;\n    background: #fffaf0;\n  }\n"], ["\n  {\n    box-shadow:2px 2px 11px rgba(0, 0, 0, 0.5);\n    -webkit-box-shadow:2px 2px 11px rgba(0, 0, 0, 0.5);\n    border-radius: 10px;\n    background: #fffaf0;\n  }\n"])));
var GraphCell = BorderedDiv.extend(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  {\n    position: fixed;\n    left: 15%;\n    top: 1%;\n    width: 62%;\n    height: 78%;\n  }\n"], ["\n  {\n    position: fixed;\n    left: 15%;\n    top: 1%;\n    width: 62%;\n    height: 78%;\n  }\n"])));
var ToolCell = BorderedDiv.extend(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  {\n     position: fixed;\n    left: 1%;\n    top: 1%;\n    width: 12%;\n    height: 78%;\n  }\n"], ["\n  {\n     position: fixed;\n    left: 1%;\n    top: 1%;\n    width: 12%;\n    height: 78%;\n  }\n"])));
var TaskCell = BorderedDiv.extend(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  {\n    position: fixed;\n    left: 79%;\n    top: 1%;\n    width: 20%;\n    height: 78%;\n  }\n"], ["\n  {\n    position: fixed;\n    left: 79%;\n    top: 1%;\n    width: 20%;\n    height: 78%;\n  }\n"])));
var LeftBottom = BorderedDiv.extend(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  {\n    position: fixed;\n    left: 1%;\n    top: 80%;\n    width: 12%;\n    height: 19%;\n  }\n"], ["\n  {\n    position: fixed;\n    left: 1%;\n    top: 80%;\n    width: 12%;\n    height: 19%;\n  }\n"])));
var LowRow = BorderedDiv.extend(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  {\n    position: fixed;\n    left: 15%;\n    top: 80%;\n    width: 84%;\n    height: 19%;\n  }\n"], ["\n  {\n    position: fixed;\n    left: 15%;\n    top: 80%;\n    width: 84%;\n    height: 19%;\n  }\n"])));
var div = styled_components_1.default.div;
var App = div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n  }\n"], ["\n  {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n  }\n"])));
var MainRow = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 80%;\n  }\n"], ["\n  {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 80%;\n  }\n"])));
var TaskTemplate = /** @class */ (function (_super) {
    __extends(TaskTemplate, _super);
    function TaskTemplate(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            status: __1.store.getState().app.status,
        };
        __1.store.subscribe(function () {
            if (__1.store.getState().app.status !== _this.state.status) {
                _this.setState({
                    status: __1.store.getState().app.status,
                });
            }
        });
        _this.task = _this.task.bind(_this);
        _this.getTaskToolbar = _this.getTaskToolbar.bind(_this);
        return _this;
    }
    TaskTemplate.prototype.componentWillMount = function () {
        var _this = this;
        var data = sessionStorage.getItem('variant');
        var graph;
        if (data) {
            graph = this.graphManager(data);
        }
        else {
            graph = graphlabs_core_graphs_1.GraphGenerator.generate(5);
        }
        graph.vertices.forEach(function (v) { return _this.dispatch(actions_1.actionsCreators.addVertex(v.name)); });
        graph.edges.forEach(function (e) { return _this.dispatch(actions_1.actionsCreators.addEdge(e.vertexOne.name, e.vertexTwo.name)); });
    };
    TaskTemplate.prototype.render = function () {
        var Task = this.task();
        var Toolbar = this.getTaskToolbar();
        return (React.createElement(App, { id: "wrap" }, this.state.status
            ? React.createElement("p", null, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E. \u041E\u0436\u0438\u0434\u0430\u0439\u0442\u0435 \u043E\u0442\u0432\u0435\u0442\u0430 \u043E\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430...")
            : (React.createElement("div", null,
                React.createElement(MainRow, null,
                    React.createElement(GraphCell, null,
                        React.createElement(GraphVisualizer_1.GraphVisualizer, null)),
                    React.createElement(TaskCell, null,
                        React.createElement("p", null, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435"),
                        React.createElement(Task, null)),
                    React.createElement(ToolCell, null,
                        React.createElement(Toolbar, null))),
                React.createElement(LeftBottom, null,
                    React.createElement(StudentMark_1.StudentMark, null)),
                React.createElement(LowRow, null,
                    React.createElement(TaskConsole_1.TaskConsole, null))))));
    };
    TaskTemplate.prototype.graphManager = function (data) {
        var graphData = JSON.parse(data);
        var _a = graphData.data[0], vertices = _a.vertices, edges = _a.edges;
        var graph = new graphlabs_core_graphs_1.Graph();
        vertices.forEach(function (v) {
            graph.addVertex(new graphlabs_core_graphs_1.Vertex(v));
        });
        edges.forEach(function (e) {
            graph.addEdge(new graphlabs_core_graphs_1.Edge(graph.getVertex(e.source)[0], graph.getVertex(e.target)[0]));
        });
        return graph;
    };
    TaskTemplate.prototype.getTaskToolbar = function () {
        return TaskToolbar_1.TaskToolbar;
    };
    TaskTemplate.prototype.task = function () {
        return function () { return React.createElement("p", null, "\u042D\u0442\u043E \u043F\u0443\u0441\u0442\u043E\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0437\u0430\u0434\u0430\u043D\u0438\u044F"); };
    };
    TaskTemplate.prototype.dispatch = function (action) {
        __1.store.dispatch(action);
        return void 0;
    };
    return TaskTemplate;
}(react_1.Component));
exports.TaskTemplate = TaskTemplate;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=TaskTemplate.js.map
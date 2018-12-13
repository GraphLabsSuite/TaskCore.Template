"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_hot_loader_1 = require("react-hot-loader");
require("bootstrap/dist/css/bootstrap.css");
var TaskTemplate_1 = require("./components/TaskTemplate/TaskTemplate");
var updateRender = function () {
    ReactDOM.render(React.createElement(react_hot_loader_1.AppContainer, null,
        React.createElement(TaskTemplate_1.TaskTemplate, null)), document.getElementById('root'));
};
updateRender();
if (module.hot) {
    module.hot.accept();
}
//# sourceMappingURL=root.js.map
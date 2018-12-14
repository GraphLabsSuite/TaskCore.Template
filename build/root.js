"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const react_hot_loader_1 = require("react-hot-loader");
require("bootstrap/dist/css/bootstrap.css");
const TaskTemplate_1 = require("./components/TaskTemplate/TaskTemplate");
const updateRender = () => {
    ReactDOM.render(React.createElement(react_hot_loader_1.AppContainer, null,
        React.createElement(TaskTemplate_1.TaskTemplate, null)), document.getElementById('root'));
};
updateRender();
if (module.hot) {
    module.hot.accept();
}
//# sourceMappingURL=root.js.map
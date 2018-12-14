"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ToolButtonList_1 = require("../ToolButtonList/ToolButtonList");
const styled_components_1 = require("styled-components");
const Title = styled_components_1.default.div `
  {
    font-size: 100%;
  }
`;
class TaskToolbar extends React.Component {
    render() {
        const Buttons = this.getButtonList();
        return (React.createElement("div", null,
            React.createElement(Title, null, "\u041F\u0430\u043D\u0435\u043B\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432"),
            React.createElement(Buttons, null)));
    }
    getButtonList() {
        return ToolButtonList_1.ToolButtonList;
    }
}
exports.TaskToolbar = TaskToolbar;
//# sourceMappingURL=TaskToolbar.js.map
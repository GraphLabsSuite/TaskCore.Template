"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const button = styled_components_1.default.button;
const ToolButtonStyle = button `
  {
    position: relative;
    width: 100%;
    margin-left: -50%;
    left: 50%;
  }
`;
class ToolButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(ToolButtonStyle, { className: "btn btn-success", onClick: this.props.listener },
            React.createElement("img", { src: this.props.path })));
    }
}
exports.ToolButton = ToolButton;
//# sourceMappingURL=ToolButton.js.map
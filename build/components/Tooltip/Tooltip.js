"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
class Tooltip extends react_1.Component {
    render() {
        const { value } = this.props;
        return (this.props.show && (React.createElement("div", { style: {
                top: this.props.bound.getBoundingClientRect().top,
                left: this.props.bound.getBoundingClientRect().right,
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                position: 'fixed',
                padding: 5,
                margin: 5,
                zIndex: 1001,
                fontSize: '10pt',
                whiteSpace: 'pre-line',
                maxWidth: '400px',
            }, onClick: this.props.showTooltip }, value)));
    }
}
exports.default = Tooltip;
//# sourceMappingURL=Tooltip.js.map
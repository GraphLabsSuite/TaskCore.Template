"use strict";
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
var react_1 = require("react");
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tooltip.prototype.render = function () {
        var value = this.props.value;
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
    };
    return Tooltip;
}(react_1.Component));
exports.default = Tooltip;
//# sourceMappingURL=Tooltip.js.map
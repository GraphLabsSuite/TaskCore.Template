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
var CommonGraphAdapter_1 = require("../../adapters/CommonGraphAdapter");
var GraphVisualizer = /** @class */ (function (_super) {
    __extends(GraphVisualizer, _super);
    function GraphVisualizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GraphVisualizer.prototype.render = function () {
        return React.createElement(CommonGraphAdapter_1.CommonGraphAdapter, null);
    };
    return GraphVisualizer;
}(React.Component));
exports.GraphVisualizer = GraphVisualizer;
//# sourceMappingURL=GraphVisualizer.js.map
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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var d3_selection_1 = require("d3-selection");
var d3 = require("d3");
var graphlabs_core_graphs_1 = require("graphlabs.core.graphs");
var graphlabs_core_visualizer_1 = require("graphlabs.core.visualizer");
var serializers_1 = require("../utils/serializers");
var store_1 = require("../redux/store");
var react_1 = require("react");
var CommonGraphAdapter = /** @class */ (function (_super) {
    __extends(CommonGraphAdapter, _super);
    function CommonGraphAdapter(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            events: []
        };
        _this.updateGraph = _this.updateGraph.bind(_this);
        return _this;
    }
    Object.defineProperty(CommonGraphAdapter.prototype, "graph", {
        get: function () {
            var _this = this;
            var state = store_1.store.getState();
            store_1.store.subscribe(function () {
                if (_this.graph !== store_1.store.getState().graph) {
                    _this._graph = store_1.store.getState().graph;
                    _this.forceUpdate();
                }
            });
            this._graph = __assign({}, state.graph);
            return this._graph;
        },
        enumerable: true,
        configurable: true
    });
    CommonGraphAdapter.prototype.clickEdge = function () {
        // tslint:disable-next-line no-console
        console.log('Edge clicked!');
    };
    CommonGraphAdapter.prototype.clickVertex = function () {
        // tslint:disable-next-line no-console
        console.log('Vertex clicked!');
    };
    CommonGraphAdapter.prototype.renderSvg = function () {
        this.graphVisualizer.width = this.ref.clientWidth || this.ref.getBoundingClientRect().width;
        this.graphVisualizer.height = this.ref.clientHeight || this.ref.getBoundingClientRect().height;
        this.graphVisualizer.calculate();
        for (var _i = 0, _a = this.graphVisualizer.geometric.edges; _i < _a.length; _i++) {
            var elem = _a[_i];
            var data = [{ x: elem.outPoint.X, y: elem.outPoint.Y }, { x: elem.inPoint.X, y: elem.inPoint.Y }];
            d3_selection_1.select(this.ref)
                .append('line')
                .attr('id', "edge_" + elem.edge.vertexOne.name + "_" + elem.edge.vertexTwo.name)
                .attr('out', elem.edge.vertexOne.name)
                .attr('in', elem.edge.vertexTwo.name)
                .attr('x1', data[0].x)
                .attr('x2', data[1].x)
                .attr('y1', data[0].y)
                .attr('y2', data[1].y)
                .style('stroke', 'black')
                .style('stroke-width', 5)
                .style('fill', 'none')
                .on('click', this.clickEdge.bind(this));
        }
        for (var _b = 0, _c = this.graphVisualizer.geometric.vertices; _b < _c.length; _b++) {
            var elem = _c[_b];
            d3_selection_1.select(this.ref)
                .append('circle')
                .attr('id', "vertex_" + elem.label)
                .attr('cx', elem.center.X)
                .attr('cy', elem.center.Y)
                .attr('r', elem.radius)
                .style('fill', '#eee')
                .style('stroke', '#000')
                .style('stroke-width', 5)
                .classed('dragging', true)
                .call(d3.drag().on('start', startDrag))
                .on('click', this.clickVertex.bind(this));
            d3_selection_1.select(this.ref)
                .append('text')
                .attr('id', "label_" + elem.label)
                .attr('x', elem.center.X)
                .attr('y', elem.center.Y + elem.radius / 4)
                .attr('font-size', elem.radius)
                .text(elem.label)
                .style('fill', '#000')
                .style('font-family', 'sans-serif')
                .style('text-anchor', 'middle')
                .style('padding-top', '50%')
                .style('user-select', 'none')
                .style('pointer-events', 'none');
        }
        function startDrag() {
            var circle = d3.select(this).classed('dragging', true);
            d3.event.on('drag', dragged).on('end', ended);
            function dragged(d) {
                // if (d3.event.x < referrer.clientWidth - radius
                //     && d3.event.x > radius && d3.event.y < referrer.clientHeight - radius && d3.event.y > radius) {
                circle.raise().attr('cx', d3.event.x).attr('cy', d3.event.y);
                var name = circle.attr('id');
                var _id = name.substring(7);
                d3_selection_1.select("#label_" + _id)
                    .raise()
                    .attr('x', d3.event.x)
                    .attr('y', d3.event.y + +circle.attr('r') / 4);
                d3.selectAll('line').each(function (l, li) {
                    if ("vertex_" + d3.select(this).attr('out') === name) {
                        d3_selection_1.select(this)
                            .attr('x1', d3.event.x)
                            .attr('y1', d3.event.y);
                    }
                    if ("vertex_" + d3.select(this).attr('in') === name) {
                        d3_selection_1.select(this)
                            .attr('x2', d3.event.x)
                            .attr('y2', d3.event.y);
                    }
                });
                // } else {
                //     console.log("ATTENTION!!!");
                // }
            }
            function ended() {
                circle.classed('dragging', false);
            }
        }
    };
    CommonGraphAdapter.prototype.updateSvg = function () {
        this.graphVisualizer.width = this.ref.clientWidth;
        this.graphVisualizer.height = this.ref.clientHeight;
        this.graphVisualizer.calculate();
        for (var _i = 0, _a = this.graphVisualizer.geometric.vertices; _i < _a.length; _i++) {
            var elem = _a[_i];
            d3_selection_1.select("#vertex_" + elem.label)
                .attr('cx', elem.center.X)
                .attr('cy', elem.center.Y)
                .attr('fill', 'black')
                .attr('r', elem.radius);
            d3_selection_1.select("#label_" + elem.label).raise().attr('x', elem.center.X).attr('y', elem.center.Y);
        }
        for (var _b = 0, _c = this.graphVisualizer.geometric.edges; _b < _c.length; _b++) {
            var elem = _c[_b];
            d3_selection_1.select("#edge_" + elem.edge.vertexOne.name + "_" + elem.edge.vertexTwo.name)
                .attr('x1', elem.outPoint.X)
                .attr('x2', elem.inPoint.X)
                .attr('y1', elem.outPoint.Y)
                .attr('y2', elem.inPoint.Y);
        }
    };
    CommonGraphAdapter.prototype.componentDidMount = function () {
        var graphInString = serializers_1.graphSerializer(this.graph);
        var graph = graphlabs_core_graphs_1.GraphSerializer.deserialize(graphInString);
        this.graphVisualizer = new graphlabs_core_visualizer_1.CircleGraphVisualizer(graph);
        this.renderSvg();
        window.onresize = this.updateSvg.bind(this);
    };
    CommonGraphAdapter.prototype.updateGraph = function () {
        // tslint:disable-next-line no-console
        console.log('Here I am!');
    };
    CommonGraphAdapter.prototype.render = function () {
        var _this = this;
        return (React.createElement("svg", { style: { width: '100%', height: '100%' }, ref: function (ref) { return _this.ref = ref; } }));
    };
    return CommonGraphAdapter;
}(react_1.Component));
exports.CommonGraphAdapter = CommonGraphAdapter;
//# sourceMappingURL=CommonGraphAdapter.js.map
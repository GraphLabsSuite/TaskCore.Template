"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const d3_selection_1 = require("d3-selection");
const d3 = require("d3");
const graphlabs_core_graphs_1 = require("graphlabs.core.graphs");
const graphlabs_core_visualizer_1 = require("graphlabs.core.visualizer");
const serializers_1 = require("../utils/serializers");
const store_1 = require("../redux/store");
const react_1 = require("react");
class CommonGraphAdapter extends react_1.Component {
    get graph() {
        const state = store_1.store.getState();
        store_1.store.subscribe(() => {
            if (this.graph !== store_1.store.getState().graph) {
                this._graph = store_1.store.getState().graph;
                this.forceUpdate();
            }
        });
        this._graph = Object.assign({}, state.graph);
        return this._graph;
    }
    clickEdge() {
        // tslint:disable-next-line no-console
        console.log('Edge clicked!');
    }
    clickVertex() {
        // tslint:disable-next-line no-console
        console.log('Vertex clicked!');
    }
    renderSvg() {
        this.graphVisualizer.width = this.ref.clientWidth || this.ref.getBoundingClientRect().width;
        this.graphVisualizer.height = this.ref.clientHeight || this.ref.getBoundingClientRect().height;
        this.graphVisualizer.calculate();
        for (const elem of this.graphVisualizer.geometric.edges) {
            const data = [{ x: elem.outPoint.X, y: elem.outPoint.Y }, { x: elem.inPoint.X, y: elem.inPoint.Y }];
            d3_selection_1.select(this.ref)
                .append('line')
                .attr('id', `edge_${elem.edge.vertexOne.name}_${elem.edge.vertexTwo.name}`)
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
        for (const elem of this.graphVisualizer.geometric.vertices) {
            d3_selection_1.select(this.ref)
                .append('circle')
                .attr('id', `vertex_${elem.label}`)
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
                .attr('id', `label_${elem.label}`)
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
            const circle = d3.select(this).classed('dragging', true);
            d3.event.on('drag', dragged).on('end', ended);
            function dragged(d) {
                // if (d3.event.x < referrer.clientWidth - radius
                //     && d3.event.x > radius && d3.event.y < referrer.clientHeight - radius && d3.event.y > radius) {
                circle.raise().attr('cx', d3.event.x).attr('cy', d3.event.y);
                const name = circle.attr('id');
                const _id = name.substring(7);
                d3_selection_1.select(`#label_${_id}`)
                    .raise()
                    .attr('x', d3.event.x)
                    .attr('y', d3.event.y + +circle.attr('r') / 4);
                d3.selectAll('line').each(function (l, li) {
                    if (`vertex_${d3.select(this).attr('out')}` === name) {
                        d3_selection_1.select(this)
                            .attr('x1', d3.event.x)
                            .attr('y1', d3.event.y);
                    }
                    if (`vertex_${d3.select(this).attr('in')}` === name) {
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
    }
    updateSvg() {
        this.graphVisualizer.width = this.ref.clientWidth;
        this.graphVisualizer.height = this.ref.clientHeight;
        this.graphVisualizer.calculate();
        for (const elem of this.graphVisualizer.geometric.vertices) {
            d3_selection_1.select(`#vertex_${elem.label}`)
                .attr('cx', elem.center.X)
                .attr('cy', elem.center.Y)
                .attr('fill', 'black')
                .attr('r', elem.radius);
            d3_selection_1.select(`#label_${elem.label}`).raise().attr('x', elem.center.X).attr('y', elem.center.Y);
        }
        for (const elem of this.graphVisualizer.geometric.edges) {
            d3_selection_1.select(`#edge_${elem.edge.vertexOne.name}_${elem.edge.vertexTwo.name}`)
                .attr('x1', elem.outPoint.X)
                .attr('x2', elem.inPoint.X)
                .attr('y1', elem.outPoint.Y)
                .attr('y2', elem.inPoint.Y);
        }
    }
    componentDidMount() {
        const graphInString = serializers_1.graphSerializer(this.graph);
        const graph = graphlabs_core_graphs_1.GraphSerializer.deserialize(graphInString);
        this.graphVisualizer = new graphlabs_core_visualizer_1.CircleGraphVisualizer(graph);
        this.renderSvg();
        window.onresize = this.updateSvg.bind(this);
    }
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
        this.updateGraph = this.updateGraph.bind(this);
    }
    updateGraph() {
        // tslint:disable-next-line no-console
        console.log('Here I am!');
    }
    render() {
        return (React.createElement("svg", { style: { width: '100%', height: '100%' }, ref: (ref) => this.ref = ref }));
    }
}
exports.CommonGraphAdapter = CommonGraphAdapter;
//# sourceMappingURL=CommonGraphAdapter.js.map
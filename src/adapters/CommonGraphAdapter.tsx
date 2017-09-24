import * as React from "react";
import {select} from "d3-selection";
import * as d3 from "d3";

import * as styles from "./CommonGraphAdapter.scss";
import {RootState} from "../redux/rootReducer";
import {connect} from "react-redux";
import {returnType} from "../utils/typeUtils";
import {GraphSerializer, IEdge, IGraph, IVertex} from "graphlabs.core.graphs";
import {CircleGraphVisualizer} from "graphlabs.core.visualizer/build/visualizers/CircleGraphVisualizer";

import {graphSerializer} from "../utils/serializers";
import {findDOMNode} from "react-dom";
import {Point} from "graphlabs.core.visualizer";

interface CommonGraphAdapterOwnProps {
}

interface CommonGraphAdapterState extends React.ComponentState {
  events: Event[];
}

const mapStateToProps = (state: RootState) => {
    return {
        graph: state.graph
    };
};

const stateGeneric = returnType(mapStateToProps);
type CommonGraphAdapterStateProps = typeof stateGeneric;
type CommonGraphAdapterProps = CommonGraphAdapterStateProps & CommonGraphAdapterOwnProps;

class CommonGraphAdapter extends React.Component<CommonGraphAdapterProps, CommonGraphAdapterState> {

  ref: SVGSVGElement;
  graphVisualizer: CircleGraphVisualizer;

  renderSvg() {
      this.graphVisualizer.width = this.ref.clientWidth;
      this.graphVisualizer.height = this.ref.clientHeight;
      this.graphVisualizer.calculate();
      for (const elem of this.graphVisualizer.geometric.vertices) {
          select(this.ref)
              .append('circle')
              .attr('id', `vertex_${elem.label}`)
              .attr('cx', elem.center.X)
              .attr('cy', elem.center.Y)
              .attr('fill', 'black')
              .attr('r', elem.radius)
              .classed("dragging", true)
              .call(d3.drag().on("start", started));
      }
      console.log(this.graphVisualizer);
      for (const elem of this.graphVisualizer.geometric.edges) {
          const data = [{x:elem.outPoint.X, y:elem.outPoint.Y}, {x:elem.inPoint.X, y:elem.inPoint.Y}];
          select(this.ref)
              .append("line")
              .attr("id", `edge_${elem.edge.vertexOne.name}_${elem.edge.vertexTwo.name}`)
              .attr("out", elem.edge.vertexOne.name)
              .attr("in", elem.edge.vertexTwo.name)
              .attr("class", "link")
              .attr("x1", data[0].x)
              .attr("x2", data[1].x)
              .attr("y1", data[0].y)
              .attr("y2", data[1].y)
              .attr("fill", "none")
              .attr("stroke", "black")
              .attr("stroke-width", "5");
      }

      function started() {
          const circle = d3.select(this).classed("dragging", true);

          d3.event.on("drag", dragged).on("end", ended);

          function dragged(d) {
              // if (d3.event.x < referrer.clientWidth - radius
              //     && d3.event.x > radius && d3.event.y < referrer.clientHeight - radius && d3.event.y > radius) {
              circle.raise().attr("cx", d3.event.x).attr("cy", d3.event.y);
              const name = circle.attr("id");
              d3.selectAll('line').each(function(l, li) {
                  console.log(d3.select(this).attr("out"), name, d3.select(this).attr("in"));
                  if (`vertex_${d3.select(this).attr("out")}` == name) {
                      console.log("asdasd");
                      d3.select(this)
                          .attr("x1", d3.event.x)
                          .attr("y1", d3.event.y);
                  }
                  if (`vertex_${d3.select(this).attr("in")}` == name) {
                      console.log("asda");
                      d3.select(this)
                          .attr("x2", d3.event.x)
                          .attr("y2", d3.event.y);
                  }
              });
              // } else {
              //     console.log("ATTENTION!!!");
              // }
          }

          function ended() {
              circle.classed("dragging", false);
          }
      }
  }

  updateSvg() {
      this.graphVisualizer.width = this.ref.clientWidth;
      this.graphVisualizer.height = this.ref.clientHeight;
      this.graphVisualizer.calculate();
      for (const elem of this.graphVisualizer.geometric.vertices) {
          select(`#vertex_${elem.label}`)
              .attr('cx', elem.center.X)
              .attr('cy', elem.center.Y)
              .attr('fill', 'black')
              .attr('r', elem.radius);
      }

      for (const elem of this.graphVisualizer.geometric.edges) {
          select(``);
      }
  }

  componentDidMount() {
      const graphInString: string = graphSerializer(this.props.graph);
      const graph: IGraph<IVertex, IEdge> = GraphSerializer.deserialize(graphInString);
      this.graphVisualizer = new CircleGraphVisualizer(graph);
      this.renderSvg();
      window.onresize = this.updateSvg.bind(this);
  }

  constructor() {
    super();
    this.state = {
      events: []
    };
    this.updateGraph = this.updateGraph.bind(this);
  }

  updateGraph() {
      console.log("Here I am!");
  }

    render() {
    return <svg
      className={styles.svg}
      ref={(ref: SVGSVGElement) => this.ref = ref}
    >
    </svg>;
  }
}

export default connect<CommonGraphAdapterStateProps, {}, CommonGraphAdapterOwnProps>(mapStateToProps)(CommonGraphAdapter);
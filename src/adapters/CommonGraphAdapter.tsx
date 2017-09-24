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
      console.log(this.graphVisualizer);
      let i = 0;
      for (const elem of this.graphVisualizer.geometric.vertices) {
          select(this.ref)
              .append('circle')
              .attr('cx', elem.center.X)
              .attr('cy', elem.center.Y)
              .attr('fill', 'black')
              .attr('r', elem.radius)
              .classed("dragging", true)
              .call(d3.drag().on("start", started));
          i++;
      }

      function started() {
          const circle = d3.select(this).classed("dragging", true);

          d3.event.on("drag", dragged).on("end", ended);

          function dragged(d) {
              // if (d3.event.x < referrer.clientWidth - radius
              //     && d3.event.x > radius && d3.event.y < referrer.clientHeight - radius && d3.event.y > radius) {
              circle.raise().attr("cx", d3.event.x).attr("cy", d3.event.y);
              // } else {
              //     console.log("ATTENTION!!!");
              // }
          }

          function ended() {
              circle.classed("dragging", false);
          }
      }
  }

  componentDidMount() {
      const graphInString: string = graphSerializer(this.props.graph);
      const graph: IGraph<IVertex, IEdge> = GraphSerializer.deserialize(graphInString);
      this.graphVisualizer = new CircleGraphVisualizer(graph);
      this.renderSvg();
      window.addEventListener('onresize', function() {
          console.log("sth");
      });
      // this.ref.addEventListener('SVGResize', this.renderSvg);
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
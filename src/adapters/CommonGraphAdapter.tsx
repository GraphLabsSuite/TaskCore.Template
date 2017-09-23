import * as React from "react";
import { select } from "d3-selection";
import * as d3 from "d3";

import * as styles from "./CommonGraphAdapter.scss";
import {RootState} from "../redux/rootReducer";
import {connect, MapStateToPropsParam,  } from "react-redux";
import {returnType} from "../utils/typeUtils";
import {Point} from "graphlabs.core.visualizer/build/types/Point";

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

  componentDidMount() {
      let i = 0;
      console.log(this.props.graph);
      for (const elem of this.props.graph.vertices) {
          select(this.ref)
              .append('circle')
              .attr('cx', 200 + 100 * i)
              .attr('cy', 200)
              .attr('fill', 'black')
              .attr('r', 50)
              .classed("dragging", true)
              .call(d3.drag().on("start", started));
          i++;
      }

      function started() {
          const circle = d3.select(this).classed("dragging", true);

          d3.event.on("drag", dragged).on("end", ended);

          function dragged(d) {
              circle.raise().attr("cx", d3.event.x).attr("cy", d3.event.y);
          }

          function ended() {
              circle.classed("dragging", false);
          }
      }
  }



  constructor() {
    super();
    this.state = {
      events: []
    };
    this.updateGraph = this.updateGraph.bind(this);
  }

  updateGraph() {

  }

    render() {
    return <svg
      className={styles.svg}
      onClick={this.updateGraph}
      ref={(ref: SVGSVGElement) => this.ref = ref}
    >
    </svg>;
  }
}

export default connect<CommonGraphAdapterStateProps, {}, CommonGraphAdapterOwnProps>(mapStateToProps)(CommonGraphAdapter);
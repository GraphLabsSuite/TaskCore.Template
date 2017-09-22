import * as React from "react";
import { select } from "d3-selection";

import * as styles from "./CommonGraphAdapter.scss";
import {RootState} from "../redux/rootReducer";
import {connect, MapStateToPropsParam,  } from "react-redux";
import {IGraphView} from "../models/graph";
import {Dispatch} from "redux";
import {typedConnect} from "../utils/typedConnect";
import {returnType} from "../utils/typeUtils";

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

  constructor() {
    super();
    this.state = {
      events: []
    };
    this.updateGraph = this.updateGraph.bind(this);
  }

  updateGraph() {
    let i = 0;
    console.log(this.props.graph);
    for (const elem of this.props.graph.vertices) {
      select(this.ref)
          .append('circle')
          .attr('cx', 200 + 100 * i)
          .attr('cy', 200)
          .attr('fill', 'black')
          .attr('r', 50);
      i++;
    }
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
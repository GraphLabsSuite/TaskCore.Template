import * as React from "react";
import { select } from "d3-selection";

import * as styles from "./CommonGraphAdapter.scss";
import {RootState} from "../redux/rootReducer";
import {connect} from "react-redux";
import {IGraphView} from "../models/graph";

interface CommonGraphAdapterProperties {
  // graph: IGraphView;
}

interface CommonGraphAdapterState extends React.ComponentState {
  events: Event[]
}

class CommonGraphAdapter extends React.Component<CommonGraphAdapterProperties, CommonGraphAdapterState> {

  ref: SVGSVGElement;
  events: Event[];

  constructor() {
    super();
    this.events = [];
    this.updateGraph = this.updateGraph.bind(this);
  }

  updateGraph() {
    let i = 0;
    // for (const elem of this.props.graph.vertices) {
      select(this.ref)
          .append('circle')
          .attr('cx', 200 + 10 * i)
          .attr('cy', 200)
          .attr('fill', 'black')
          .attr('r', 50);
      i++;
    // }
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

// const mapStateToProps = (state: RootState): CommonGraphAdapterProperties => {
//   return {
//     graph: state.graphState.graph
//   };
// };

// export default connect<CommonGraphAdapterState, CommonGraphAdapterProperties, {}>(mapStateToProps)(CommonGraphAdapter);
export default CommonGraphAdapter;
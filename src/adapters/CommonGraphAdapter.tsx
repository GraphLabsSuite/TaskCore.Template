import * as React from "react";
import { select } from "d3-selection";

import * as styles from "./CommonGraphAdapter.scss";

interface CommonGraphAdapterProperties {
  data: number[];
}

interface CommonGraphAdapterState extends React.ComponentState {
  events: Event[]
}

export class CommonGraphAdapter extends React.Component<CommonGraphAdapterProperties, CommonGraphAdapterState> {

  ref: SVGSVGElement;
  events: Event[];

  constructor() {
    super();
    this.events = [];
    this.updateGraph = this.updateGraph.bind(this);
  }

  updateGraph() {
    select(this.ref)
      .append('circle')
      .attr('cx', 200)
      .attr('cy', 200)
      .attr('fill', 'black')
      .attr('r', 50);
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
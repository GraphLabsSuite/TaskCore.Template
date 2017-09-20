import * as React from "react";
import {CommonGraphAdapter} from "../../adapters/CommonGraphAdapter";

interface GraphVisualizerProperties {
}

export class GraphVisualizer extends React.Component<GraphVisualizerProperties, React.ComponentState> {

  public constructor() {
    super();
  }

  public render() {
    return <CommonGraphAdapter
        data={[1,2,3,4,5]}
      />;
  }
}
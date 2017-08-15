import * as React from "react";

interface GraphVisualizerProperties {
}

export class GraphVisualizer extends React.Component<GraphVisualizerProperties, React.ComponentState> {

  public constructor() {
    super();
  }

  public render() {
    return (<div>
      This is graph visualizer
    </div>);
  }
}
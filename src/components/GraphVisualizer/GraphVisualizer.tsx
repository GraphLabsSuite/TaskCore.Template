import * as React from "react";

export interface GraphVisualizerProperties {}

export class GraphVisualizer extends React.Component<GraphVisualizerProperties, React.ComponentState> {
  public render() {
    return (<div className="col-md-10">
      This is graph visualizer
    </div>);
  }
}
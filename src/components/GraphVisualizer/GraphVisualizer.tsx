import * as React from "react";
import {CommonGraphAdapter} from "../../adapters/CommonGraphAdapter";

interface GraphVisualizerProperties {
}

export class GraphVisualizer extends React.Component<GraphVisualizerProperties, React.ComponentState> {

  private canvas_id: string = "graph";

  public constructor() {
    super();
    CommonGraphAdapter.renderGraph(this.canvas_id);
  }

  public render() {
    return (<div>
      <canvas id={this.canvas_id} />
    </div>);
  }
}
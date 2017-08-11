import * as React from "react";
import {GraphVisualizer} from "../GraphVisualizer/GraphVisualizer";
import {TaskToolbar} from "../TaskToolbar/TaskToolbar";
import {TaskConsole} from "../TaskConsole/TaskConsole";

export interface AppProperties {}

export class TaskTemplate extends React.Component<AppProperties, React.ComponentState> {

  private _graph;

  public constructor() {
    super();
    this._graph = null;
  }

  render() {
    return (<div id="wrap">
      <div className="row">
          <GraphVisualizer/>
          <TaskToolbar/>
      </div>
      <TaskConsole/>
    </div>);
  }
}
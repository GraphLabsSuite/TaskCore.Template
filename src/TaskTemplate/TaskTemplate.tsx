import * as React from "react";
import {TaskConsole} from "../components/TaskConsole";
import {GraphVisualizer} from "../components/GraphVisualizer";
import {TaskToolbar} from "../components/TaskToolbar";

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
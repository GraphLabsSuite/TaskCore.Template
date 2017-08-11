import * as React from "react";
import {GraphVisualizer} from "../GraphVisualizer/GraphVisualizer";
import {TaskToolbar} from "../TaskToolbar/TaskToolbar";
import {TaskConsole} from "../TaskConsole/TaskConsole";

const style = require('./TaskTemplate.scss');

export interface AppProperties {}

export class TaskTemplate extends React.Component<AppProperties, React.ComponentState> {

  private _graph;

  public constructor() {
    super();
    this._graph = null;
  }

  render() {
    console.log(style);
    return (
      <div id="wrap" className={style.App}>
        <div className="row">
          <GraphVisualizer/>
          <TaskToolbar/>
        </div>
        <TaskConsole/>
        <button className="btn-success">Test</button>
      </div>
    );
  }
}
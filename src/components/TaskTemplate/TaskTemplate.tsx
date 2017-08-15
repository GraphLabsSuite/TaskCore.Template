import * as React from "react";
import {GraphVisualizer} from "../GraphVisualizer/GraphVisualizer";
import {TaskToolbar} from "../TaskToolbar/TaskToolbar";
import {TaskConsole} from "../TaskConsole/TaskConsole";
import * as classnames from "classnames";

import * as style from "./TaskTemplate.scss";
import * as commonStyle from "../../styles/Common.scss";

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
        <div className={style.MainRow}>
          <div className={classnames(style.GraphCell, commonStyle.bordered)}>
            <GraphVisualizer/>
          </div>
          <div className={classnames(style.ToolCell, commonStyle.bordered)}>
            <TaskToolbar/>
          </div>
        </div>
        <div className={classnames(style.LowRow,commonStyle.bordered)}>
          <TaskConsole/>
        </div>
      </div>
    );
  }
}
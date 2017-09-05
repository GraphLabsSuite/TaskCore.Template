import * as React from "react";
import {ToolButtonList} from "../ToolButtonList/ToolButtonList";

import * as style from "./TaskToolbar.scss";

export interface TaskToolbarProperties {
}

export class TaskToolbar extends React.Component<TaskToolbarProperties, React.ComponentState> {
  public render() {
    return (<div className={style.TaskToolbarCenterPosition}>
      <ToolButtonList />
      This is toolbar
    </div>);
  }
}
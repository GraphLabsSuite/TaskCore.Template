import * as React from "react";
import {ToolButtonList} from "../ToolButtonList/ToolButtonList";

export interface TaskToolbarProperties {
}

export class TaskToolbar extends React.Component<TaskToolbarProperties, React.ComponentState> {
  public render() {
    return (<div>
      <ToolButtonList />
      This is toolbar
    </div>);
  }
}
import * as React from "react";

export interface TaskToolbarProperties {}

export class TaskToolbar extends React.Component<TaskToolbarProperties, React.ComponentState> {
  public render() {
    return (<div className="col-md-2">
      This is toolbar
    </div>);
  }
}
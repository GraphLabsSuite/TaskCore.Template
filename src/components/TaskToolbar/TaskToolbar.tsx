import * as React from "react";

export interface TaskToolbarProperties {
}

export class TaskToolbar extends React.Component<TaskToolbarProperties, React.ComponentState> {
  public render() {
    return (<div>
      This is toolbar
    </div>);
  }
}
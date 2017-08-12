import * as React from "react";

export interface TaskConsoleProperties {}

export class TaskConsole extends React.Component<TaskConsoleProperties, React.ComponentState> {
  public render() {
    return (<div className="row">
        This is console
    </div>);
  }
}
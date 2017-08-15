import * as React from "react";
import {StudentMark} from "../StudentMark/StudentMark";

export interface TaskConsoleProperties {}

export class TaskConsole extends React.Component<TaskConsoleProperties, React.ComponentState> {
  public render() {
    return (<div>
      <StudentMark/>
        This is the rest of console
    </div>);
  }
}
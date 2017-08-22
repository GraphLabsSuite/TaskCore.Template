import * as React from "react";
import * as styles from "./StudentMark.scss";

interface StudentMarkProperties {
}

interface StudentMarkState {
  mark: number
}

export class StudentMark extends React.Component<StudentMarkProperties, Partial<StudentMarkState>> {

  public constructor() {
    super();
    this.state = {
      mark: 100
    }
  }

  public render() {
    return (<div className={styles.StudentMark}>
      <p className={styles.MarkPositive}>{this.state.mark}</p>
    </div>);
  }
}
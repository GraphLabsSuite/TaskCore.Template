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

  private getStyle(): string {
    if (this.state.mark > 100) return "";
    if (this.state.mark > 75) return styles.MarkPositive;
    if (this.state.mark > 60) return styles.MarkNeutral;
    if (this.state.mark > 0) return styles.MarkNegative;
    return "";
  }

  public render() {
    return (<div className={styles.StudentMark}>
      <p className={this.getStyle()}>{this.state.mark}</p>
    </div>);
  }
}
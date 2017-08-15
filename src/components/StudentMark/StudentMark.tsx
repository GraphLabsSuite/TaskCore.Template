import * as React from "react";
import * as styles from "./StudentMark.scss";

interface StudentMarkProperties {
  defaultMark: number
}

interface StudentMarkState {
  mark: number
}

export class StudentMark extends React.Component<StudentMarkProperties, Partial<StudentMarkState>> {

  public constructor(props: StudentMarkProperties) {
    super();
    this.state = {
      mark: props.defaultMark
    }
  }

  public static defaultProps: Partial<StudentMarkProperties> = {
    defaultMark: 100
  };

  public render() {
    return (<div className={styles.StudentMark}>
      <p className={styles.MarkPositive}>{this.state.mark}</p>
    </div>);
  }
}
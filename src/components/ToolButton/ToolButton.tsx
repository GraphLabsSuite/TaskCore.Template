import * as React from "react";
import * as classnames from "classnames";

import * as style from "./ToolButton.scss";

interface ToolButtonProperties {
  path: string
}

export class ToolButton extends React.Component<ToolButtonProperties, React.ComponentState> {

  public constructor() {
    super();
  }

  render() {
    return (<button className={classnames("btn btn-success", style.ToolButton)}>
      <img src={this.props.path}/>
    </button>);
  }
}
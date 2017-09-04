import * as React from "react";

interface ToolButtonProperties {
  path: string
}

export class ToolButton extends React.Component<ToolButtonProperties, React.ComponentState> {

  public path: string;

  public constructor(props: ToolButtonProperties) {
    super();
  }

  render() {
    return (<div>
      <img src={this.props.path}/>
    </div>);
  }
}
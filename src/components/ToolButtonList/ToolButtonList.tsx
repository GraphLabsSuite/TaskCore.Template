import * as React from "react";
import {ToolButton} from "../ToolButton/ToolButton";

interface ToolButtonListProperties {
}

export class ToolButtonList extends React.Component<ToolButtonListProperties, React.ComponentState> {

  public toolButtons: string[];

  componentWillMount() {
    this.toolButtons = this.setDefaultButtonList();
  }

  public constructor(props: ToolButtonListProperties) {
    super();
  }

  private setDefaultButtonList(): string[] {
    const list: string[] = [];
    list.push("../../images/Help");
    return list;
  }

  private getList() {
    return <div>{this.toolButtons.map(item => {
      return <ToolButton path={item} />
    })}</div>;
  }

  render() {
    return this.getList();
  }
}
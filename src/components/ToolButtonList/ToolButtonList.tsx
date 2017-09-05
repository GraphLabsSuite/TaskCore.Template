import * as React from "react";
import {ToolButton} from "../ToolButton/ToolButton";

import * as style from "./ToolButtonList.scss";

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
    list.push("/images/Help.png");
    list.push("/images/Complete.png");

    return list;
  }

  private getList() {
    return <div className={style.ButtonList}>{this.toolButtons.map(item => {
      return <ToolButton key={item} path={item} />
    })}</div>;
  }

  render() {
    return this.getList();
  }
}
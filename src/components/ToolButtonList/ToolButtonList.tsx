import * as React from "react";
import {ToolButton} from "../ToolButton/ToolButton";

import * as style from "./ToolButtonList.scss";
import {Dictionary} from "lodash";

interface ToolButtonListProperties {
}

export class ToolButtonList extends React.Component<ToolButtonListProperties, React.ComponentState> {

  //TODO: Add normal types to these variables (maybe Dictionary)
  public toolButtons: Object;

  componentWillMount() {
    this.toolButtons = {};
  }

  public constructor(props: ToolButtonListProperties) {
    super();
  }

  private setDefaultButtonList() {
    let list = {};
    list["/images/Help.png"] = () => { console.log("Help button!"); };
    list["/images/Complete.png"] = () => { console.log("Complete button!"); };
    return list;
  }

  private getList() {
    const result = [];
    const defaultList = this.setDefaultButtonList();
    for (const key in defaultList) result.push(<div key={key}><ToolButton path={key} listener={defaultList[key]}/></div>);
    for (const key in this.toolButtons) result.push(<ToolButton key={key} path={key} listener={this.toolButtons[key]}/>);
    return <div className={style.ButtonList}>{result}</div>;
  }

  render() {
    return this.getList();
  }
}
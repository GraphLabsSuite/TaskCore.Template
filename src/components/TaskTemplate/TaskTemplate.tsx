import * as React from "react";
import {GraphVisualizer} from "../GraphVisualizer/GraphVisualizer";
import {TaskToolbar} from "../TaskToolbar/TaskToolbar";
import {TaskConsole} from "../TaskConsole/TaskConsole";
import { GraphGenerator, IGraph, IVertex, IEdge } from "graphlabs.core.graphs";
import * as classnames from "classnames";
import {connect, DispatchProp} from "react-redux";

import { actionsCreators } from "../../redux/graph/actions";
import * as style from "./TaskTemplate.scss";
import * as commonStyle from "../../styles/Common.scss";
import {RootState} from "../../redux/rootReducer";
import {Dispatch} from "redux";

export interface AppProperties {
  addVertex: (name: string) => void,
  addEdge: (one: number, two: number) => void
}

export interface AppState extends React.ComponentState {}

class TaskTemplate extends React.Component<AppProperties, AppState> {

  componentWillMount() {
    // const graph: IGraph<IVertex, IEdge> = GraphGenerator.generate(5);
    // graph.vertices.forEach(v => this.props.addVertex(v.name));
    // graph.edges.forEach(e => this.props.addEdge(e.vertexOne.id.idValue, e.vertexTwo.id.idValue));
  }

  public constructor(props: AppProperties) {
    super(props);
  }

  render() {
    console.log(style);
    return (
      <div id="wrap" className={style.App}>
        <div className={style.MainRow}>
          <div className={classnames(style.GraphCell, commonStyle.bordered)}>
            <GraphVisualizer/>
          </div>
          <div className={classnames(style.ToolCell, commonStyle.bordered)}>
            <TaskToolbar/>
          </div>
        </div>
        <div className={classnames(style.LowRow,commonStyle.bordered)}>
          <TaskConsole/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): {}  => {
  return {
  };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>): AppProperties => {
  return {
    addVertex: (name: string) => dispatch(actionsCreators.addVertex(name)),
    addEdge: (one: number, two: number) => dispatch(actionsCreators.addEdge(one, two))
  };
};

export default connect<AppState, AppProperties, {}>(mapStateToProps, mapDispatchToProps)(TaskTemplate);
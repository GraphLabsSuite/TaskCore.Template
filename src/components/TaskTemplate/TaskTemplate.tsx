import * as React from 'react';
import { GraphVisualizer } from '../GraphVisualizer/GraphVisualizer';
import { TaskToolbar } from '../TaskToolbar/TaskToolbar';
import TaskConsole from '../TaskConsole/TaskConsole';
import { GraphGenerator, IGraph, IVertex, IEdge } from 'graphlabs.core.graphs';
import * as classnames from 'classnames';
import { connect, DispatchProp } from 'react-redux';

import { StudentMark } from '../StudentMark/StudentMark';
import { actionsCreators } from '../../redux/graph/actions';
import * as style from '../../styles/styles.css';
import { RootState } from '../../redux/rootReducer';
import { Dispatch } from 'redux';
import {default as styled, StyledFunction } from 'styled-components';
import { HTMLProps } from 'react';

export interface AppProperties {
  addVertex: (name: string) => void;
  addEdge: (one: string, two: string) => void;
}

export interface AppState extends React.ComponentState {}

const BorderedDiv = styled.div`
  {
    box-shadow:2px 2px 11px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow:2px 2px 11px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    background: #fffaf0;
  }
`;

const GraphCell = BorderedDiv.extend`
  {
    position: fixed;
    left: 15%;
    top: 1%;
    width: 62%;
    height: 78%;
  }
`;

const ToolCell = BorderedDiv.extend`
  {
     position: fixed;
    left: 1%;
    top: 1%;
    width: 12%;
    height: 78%;
  }
`;

const TaskCell = BorderedDiv.extend`
  {
    position: fixed;
    left: 79%;
    top: 1%;
    width: 20%;
    height: 78%;
  }
`;

const LeftBottom = BorderedDiv.extend`
  {
    position: fixed;
    left: 1%;
    top: 80%;
    width: 12%;
    height: 19%;
  }
`;

const LowRow =  BorderedDiv.extend`
  {
    position: fixed;
    left: 15%;
    top: 80%;
    width: 84%;
    height: 19%;
  }
`;

interface Idiv {
  id: string;
}

const div: StyledFunction<Idiv & HTMLProps<HTMLDivElement>> = styled.div;

const App = div`
  {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

const MainRow = styled.div`
  {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 80%;
  }
`;

class TaskTemplate extends React.Component<AppProperties, AppState> {

  componentWillMount() {
    const graph: IGraph<IVertex, IEdge> = GraphGenerator.generate(5);
    graph.vertices.forEach(v => this.props.addVertex(v.name));
    graph.edges.forEach(e => this.props.addEdge(e.vertexOne.name, e.vertexTwo.name));
  }

  public constructor(props: AppProperties) {
    super(props);
  }

  render() {
    return (
      <App id="wrap">
        <MainRow>
          <GraphCell>
            <GraphVisualizer/>
          </GraphCell>
          <TaskCell>
            Задание
          </TaskCell>
          <ToolCell>
            <TaskToolbar/>
          </ToolCell>
        </MainRow>
        <LeftBottom>
          <StudentMark />
        </LeftBottom>
        <LowRow>
          <TaskConsole/>
        </LowRow>
      </App>
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
    addEdge: (one: string, two: string) => dispatch(actionsCreators.addEdge(one, two))
  };
};

export default connect<AppState, AppProperties, {}>(mapStateToProps, mapDispatchToProps)(TaskTemplate);
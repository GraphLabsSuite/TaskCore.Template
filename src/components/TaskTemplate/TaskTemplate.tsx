import * as React from 'react';
import { GraphVisualizer } from '../GraphVisualizer/GraphVisualizer';
import { TaskToolbar } from '../TaskToolbar/TaskToolbar';
import { TaskConsole } from '../TaskConsole/TaskConsole';
import { GraphGenerator, IGraph, IVertex, IEdge } from 'graphlabs.core.graphs';
import { StudentMark } from '../StudentMark/StudentMark';
import { actionsCreators } from '../../redux/graph/actions';
import {default as styled, StyledFunction } from 'styled-components';
import {Component, HTMLProps, SFC} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {store} from "../../";
import {Promise} from 'bluebird';
global.Promise = Promise;

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

export class TaskTemplate extends Component {

  componentWillMount() {
    const graph: IGraph<IVertex, IEdge> = GraphGenerator.generate(5);
    graph.vertices.forEach(v => this.dispatch(actionsCreators.addVertex(v.name)));
    graph.edges.forEach(e => this.dispatch(actionsCreators.addEdge(e.vertexOne.name, e.vertexTwo.name)));
  }

  public constructor(props: any) {
    super(props);
    this.task = this.task.bind(this);
  }

  private dispatch(action) {
    store.dispatch(action);
    return void 0;
  }

  protected task(): SFC<{}> {
    return () => <p>Это пустой компонент задания</p>;
  }

  render() {
    const Task: any = this.task();
    return (
      <App id="wrap">
        <MainRow>
          <GraphCell>
            <GraphVisualizer/>
          </GraphCell>
          <TaskCell>
            Задание
            <Task />
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

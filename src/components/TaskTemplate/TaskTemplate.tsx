import * as React from 'react';
import { GraphVisualizer } from '../GraphVisualizer/GraphVisualizer';
import { TaskToolbar } from '../TaskToolbar/TaskToolbar';
import { TaskConsole } from '../TaskConsole/TaskConsole';
import { GraphGenerator, IGraph, IVertex, IEdge, Graph, Vertex, Edge } from 'graphlabs.core.graphs';
import { Matrix, IMatrix }  from 'graphlabs.core.lib';
import { StudentMark } from '../StudentMark/StudentMark';
import { actionsCreators } from '../../redux/graph/actions';
import {default as styled, StyledFunction } from 'styled-components';
import { Component, HTMLProps, SFC } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { store } from '../../';
import { Promise } from 'bluebird';

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

const LowRow = BorderedDiv.extend`
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

export class TaskTemplate extends Component<{}, { status: boolean; }> {
    public state = {
        status: store.getState().app.status,
    };

componentWillMount() {
        const data = sessionStorage.getItem('variant');
        const objectData = JSON.parse(data);
        const dataType = objectData.type;
        let graph: IGraph<IVertex, IEdge>;
        let matrix: IMatrix;
        if (data) {
          switch (objectData.type) {
             case 'matrix':
                 // matrixOb = this.matrixManager(data);
                 break;
             case 'graph':
                 graph = this.graphManager(data);
                 break;
              default:
                  break;
           }
        } else {
            graph = GraphGenerator.generate(5);
        }
        graph.vertices.forEach(v => this.dispatch(actionsCreators.addVertex(v.name)));
        graph.edges.forEach(e => this.dispatch(actionsCreators.addEdge(e.vertexOne.name, e.vertexTwo.name)));
    }

    public constructor(props: {}) {
        super(props);
        store.subscribe(() => {
            if (store.getState().app.status !== this.state.status) {
                this.setState({
                    status: store.getState().app.status,
                });
            }
        });
        this.task = this.task.bind(this);
        this.getTaskToolbar = this.getTaskToolbar.bind(this);
    }

    public render() {
        const Task: any = this.task();
        const Toolbar = this.getTaskToolbar();
        return (
            <App id="wrap">
                {this.state.status
                    ? <p>Задание выполнено. Ожидайте ответа от сервера...</p>
                    : (
                        <div>
                            <MainRow>
                                <GraphCell>
                                    <GraphVisualizer/>
                                </GraphCell>
                                <TaskCell>
                                    <p>Задание</p>
                                    <Task/>
                                </TaskCell>
                                <ToolCell>
                                    <Toolbar/>
                                </ToolCell>
                            </MainRow>
                            <LeftBottom>
                                <StudentMark/>
                            </LeftBottom>
                            <LowRow>
                                <TaskConsole/>
                            </LowRow>
                        </div>)}
            </App>
        );
    }

    protected graphManager(data: any) {
        const graphData = JSON.parse(data);
        const { vertices, edges } = graphData.data[0];
        const graph = new Graph();
        vertices.forEach((v: any) => {
           graph.addVertex(new Vertex(v));
        });
        edges.forEach((e: any) => {
           graph.addEdge(new Edge(graph.getVertex(e.source)[0], graph.getVertex(e.target)[0]));
        });
        return graph;
    }

    protected getTaskToolbar() {
        return TaskToolbar;
    }

    protected task(): SFC<{}> {
        return () => <p>Это пустой компонент задания</p>;
    }

    private dispatch(action: any) {
        store.dispatch(action);
        return void 0;
    }
}

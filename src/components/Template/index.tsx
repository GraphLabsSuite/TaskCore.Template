import * as React from 'react';
import { GraphVisualizer } from '../GraphVisualizer';
import { Toolbar } from '../Toolbar';
import { Console } from '../Console';
import { GraphGenerator, IGraph, IVertex, IEdge, Graph, Vertex, Edge } from 'graphlabs.core.graphs';
import { StudentMark } from '../StudentMark';
import { graphActionCreators, store } from '../..';
import {matrixActionCreators} from "../../redux/matrix";
import { IMatrixView } from "../../models";
import { Component, SFC } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Promise } from 'bluebird';
import styles from './Template.module.scss';
import {init, graphModel} from "../..";

global.Promise = Promise;

interface State {
    status: boolean;
}


export class Template extends Component< {}, State> {

    public state = {
        status: store.getState().app.status,
    };

    componentWillMount() {
        const data = sessionStorage.getItem('variant');
        let graph:IGraph<IVertex, IEdge>;
        let matrix: IMatrixView;
        let objectData;
        try {
            objectData = JSON.parse(data||"null");
        } catch (err) {
            console.log("Error while JSON parsing");
        }
        if (objectData && objectData.data[0].type) {
            switch (objectData.data[0].type) {
                case 'matrix':
                    matrix = this.matrixManager(objectData.data[0].value);
                    graph = GraphGenerator.generate(0);
                    init(graph);
                    break;
                case 'graph':
                    graph = this.graphManager(objectData.data[0].value);
                    init(graph);
                    graph.vertices.forEach(v => this.dispatch(graphActionCreators.addVertex(v.name)));
                    graph.edges.forEach(e => this.dispatch(graphActionCreators.addEdge(e.vertexOne.name, e.vertexTwo.name)));
                    break;
                default:
                    break;
            }
        }
        else {
            graph = GraphGenerator.generate(5);
            graph.vertices.forEach(v => this.dispatch(graphActionCreators.addVertex(v.name)));
            graph.edges.forEach(e => this.dispatch(graphActionCreators.addEdge(e.vertexOne.name, e.vertexTwo.name)));
            init(graph);
        }
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
        const Area = this.getArea();
        return (
            <div className={styles.App} id="wrap">
                {this.state.status
                    ? <p>Задание выполнено. Ожидайте ответа от сервера...</p>
                    : (
                        <div>
                            <div className={styles.MainRow}>
                                <div className={styles.GraphCell}>
                                    <Area />
                                </div>
                                <div className={styles.TaskCell}>
                                    <p>Задание</p>
                                    <Task/>
                                </div>
                                <div className={styles.ToolCell}>
                                    <Toolbar/>
                                </div>
                            </div>
                            <div className={styles.LeftBottom}>
                                <StudentMark/>
                            </div>
                            <div className={styles.LowRow}>
                                <Console/>
                            </div>
                        </div>)}
            </div>
        );
    }

    protected graphManager(data: any): IGraph<IVertex, IEdge> {
        // TODO: fix the types
        const graph: IGraph<IVertex, IEdge> = new Graph() as unknown as IGraph<IVertex, IEdge>;
        if (data) {
            let vertices = data[0].vertices;
            let edges  = data[0].edges;
            vertices.forEach((v: any) => {
                graph.addVertex(new Vertex(v));
            });
            edges.forEach((e: any) => {
                graph.addEdge(new Edge(graph.getVertex(e.source)[0], graph.getVertex(e.target)[0]));
            });
        }
        return graph;
    }

    protected matrixManager(data: any) {
        let matrix  = JSON.parse(data[0].matrix);
        store.dispatch(matrixActionCreators.fillMatrix(matrix));
        return matrix;
    }

    protected getTaskToolbar() {
        return Toolbar;
    }

    protected getArea(): SFC<{}> {
        return () => <GraphVisualizer
            graph = {graphModel}
            adapterType={'readable'}
        />;

    }

    protected task(): SFC<{}> {
        return () => <p>Это пустой компонент задания</p>;
    }

    private dispatch(action: any) {
        store.dispatch(action);
        return void 0;
    }


}


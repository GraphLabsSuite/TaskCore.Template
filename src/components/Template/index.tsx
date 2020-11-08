import * as React from 'react';
import {GraphVisualizer} from '../GraphVisualizer';
import {Toolbar} from '../Toolbar';
import {Console} from '../Console';
import {GraphGenerator, IGraph, IVertex, IEdge, Graph, Vertex, Edge, SccBuilder} from 'graphlabs.core.graphs';
import {StudentMark} from '../StudentMark';
import {graphActionCreators, store} from '../..';
import {matrixActionCreators} from '../../redux/matrix';
import {IMatrixView} from '../../models';
import {Component, SFC} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Promise} from 'bluebird';
import styles from './Template.module.scss';
import {init, graphModel} from '../..';
import {nGraphsActionCreators} from '../../redux/ngraphs';
import {INGraphsView} from '../../models';

global.Promise = Promise;

interface State {
    status: boolean;
}


export class Template extends Component<{}, State> {
    
    public scc_count = 0;

    public state = {
        status: store.getState().app.status,
    };

    componentWillMount() {
        const data = sessionStorage.getItem('variant');
        let graph: IGraph<IVertex, IEdge>;
        let matrix: IMatrixView;
        let ngraphs: INGraphsView;
        let objectData;
        try {
            objectData = JSON.parse(data || 'null');
        } catch (err) {
            console.log('Error while JSON parsing');
        }
        if (objectData && objectData.data[0] && objectData.data[0].type) {
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
                case 'n-graphs':
                    ngraphs = this.nGraphsManager(objectData.data[0].value);
                    graph = GraphGenerator.generate(0);
                    init(graph);
                    break;
                default:
                    break;
                this.scc_count = SccBuilder.findComponents(graph).length;
            }
        } else {
            graph = GraphGenerator.generate(5);
            graph.vertices.forEach(v => this.dispatch(graphActionCreators.addVertex(v.name)));
            graph.edges.forEach(e => this.dispatch(graphActionCreators.addEdge(e.vertexOne.name, e.vertexTwo.name)));
            init(graph);
            this.scc_count = SccBuilder.findComponents(graph).length;
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
                                    <Area/>
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
            let vertices = data.vertices;
            let edges = data.edges;
            vertices.forEach((v: any) => {
                graph.addVertex(new Vertex(v));
            });
            edges.forEach((e: any) => {
                if (e.name) {
                    graph.addEdge(new Edge(graph.getVertex(e.source)[0], graph.getVertex(e.target)[0], e.name[0]));
                } else {
                    graph.addEdge(new Edge(graph.getVertex(e.source)[0], graph.getVertex(e.target)[0]));
                }
            });

        }
        return graph;
    }

    protected matrixManager(data: any) {
        let matrix = JSON.parse(data.matrix);
        store.dispatch(matrixActionCreators.fillMatrix(matrix));
        return matrix;
    }

    protected nGraphsManager(data: any) {
        const ngraphs: INGraphsView = [];
        if (data && data.count) {
            const numberOfGraphs = parseInt(data.count, 10);
            for (let i = 0; i < numberOfGraphs; i++) {
                if (data.graphs[i]) {
                    const graphCache: IGraph<IVertex, IEdge> = new Graph() as unknown as IGraph<IVertex, IEdge>;
                    const vertices = data.graphs[i].vertices;
                    const edges = data.graphs[i].edges;
                    vertices.forEach((v: string) => {
                        graphCache.addVertex(new Vertex(v));
                    });
                    edges.forEach((e: { source: string; target: string; }) => {
                        graphCache.addEdge(
                            new Edge(
                                graphCache.getVertex(e.source)[0],
                                graphCache.getVertex(e.target)[0],
                            )
                        );
                    });
                    ngraphs.push(graphCache);
                }
                store.dispatch(nGraphsActionCreators.fillnGraphs(ngraphs));
            }
        }
        return ngraphs;
    }

    protected getTaskToolbar() {
        return Toolbar;
    }

    protected getArea(): SFC<{}> {
        return () => <GraphVisualizer
            graph={graphModel}
            adapterType={'readable'}
            namedEdges={false}
            vertexNaming={false}
            withoutDragging={false}
            edgeNaming={false}
            incidentEdges={false}
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


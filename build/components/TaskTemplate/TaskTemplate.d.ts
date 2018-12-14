import { TaskToolbar } from '../TaskToolbar/TaskToolbar';
import { Graph, Vertex, Edge } from 'graphlabs.core.graphs';
import { Component, SFC } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
export declare class TaskTemplate extends Component<{}, {
    status: boolean;
}> {
    state: {
        status: boolean;
    };
    componentWillMount(): void;
    constructor(props: {});
    render(): JSX.Element;
    protected graphManager(data: any): Graph<Vertex, Edge>;
    protected getTaskToolbar(): typeof TaskToolbar;
    protected task(): SFC<{}>;
    private dispatch;
}

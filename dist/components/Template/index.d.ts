import { TaskToolbar } from '../TaskToolbar';
import { IGraph, IVertex, IEdge } from 'graphlabs.core.graphs';
import { Component, SFC } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
interface State {
    status: boolean;
}
export declare class Template extends Component<{}, State> {
    state: {
        status: any;
    };
    componentWillMount(): void;
    constructor(props: {});
    render(): JSX.Element;
    protected graphManager(data: any): IGraph<IVertex, IEdge>;
    protected getTaskToolbar(): typeof TaskToolbar;
    protected getArea(): SFC<{}>;
    protected task(): SFC<{}>;
    private dispatch;
}
export {};

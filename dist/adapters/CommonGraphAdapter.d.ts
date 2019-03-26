import { IGraphView } from '..';
import { CircleGraphVisualizer } from 'graphlabs.core.visualizer';
import { Component } from 'react';
export interface CGAProps {
    className?: string;
}
export interface State {
    events: Event[];
}
export declare class CommonGraphAdapter extends Component<CGAProps, State> {
    ref: SVGSVGElement;
    graphVisualizer: CircleGraphVisualizer;
    private _graph;
    readonly graph: IGraphView;
    protected clickEdge(): void;
    protected clickVertex(): void;
    renderSvg(): void;
    updateSvg(): void;
    componentDidMount(): void;
    constructor(props: CGAProps);
    updateGraph(): void;
    render(): JSX.Element;
}

import { Component } from 'react';
export interface ButtonsState {
    show: boolean;
}
export declare class ToolButtonList extends Component<{}, ButtonsState> {
    toolButtons: Object;
    private bound;
    constructor(props: {});
    componentWillMount(): void;
    render(): JSX.Element;
    help(): string;
    beforeComplete(): Promise<any>;
    private dispatch;
    private hide;
    private setDefaultButtonList;
    private getList;
}

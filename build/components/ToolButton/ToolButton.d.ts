import * as React from 'react';
export interface ToolButtonProperties {
    path: string;
    listener: () => void;
}
export declare class ToolButton extends React.Component<ToolButtonProperties, React.ComponentState> {
    constructor(props: ToolButtonProperties);
    render(): JSX.Element;
}

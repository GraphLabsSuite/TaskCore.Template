/// <reference types="react" />
import * as React from "react";
export interface ToolButtonProperties {
    path: string;
    listener: () => void;
}
export declare class ToolButton extends React.Component<ToolButtonProperties, React.ComponentState> {
    constructor();
    render(): JSX.Element;
}

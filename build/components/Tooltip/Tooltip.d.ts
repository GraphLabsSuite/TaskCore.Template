/// <reference types="react" />
import { Component, ReactNode } from 'react';
export interface Props {
    value: string;
    show: boolean;
    showTooltip: any;
    bound: HTMLDivElement;
}
declare class Tooltip extends Component<Props> {
    tooltip: HTMLElement;
    render(): ReactNode;
}
export default Tooltip;

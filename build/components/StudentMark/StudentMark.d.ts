/// <reference types="react" />
import * as React from "react";
export interface StudentMarkProperties {
}
export interface StudentMarkState {
    mark: number;
    message: string;
}
export declare class StudentMark extends React.Component<StudentMarkProperties, Partial<StudentMarkState>> {
    constructor();
    private getStyle();
    render(): JSX.Element;
}

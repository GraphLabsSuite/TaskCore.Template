import * as React from 'react';
export interface StudentMarkProperties {
}
export interface StudentMarkState {
    mark: number;
    message: string;
}
export declare class StudentMark extends React.Component<StudentMarkProperties, Partial<StudentMarkState>> {
    constructor(props: StudentMarkProperties);
    render(): JSX.Element;
    private getStyle;
}

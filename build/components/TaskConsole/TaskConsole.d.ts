import { IStudentAction } from 'graphlabs.core.notifier';
import { Component } from "react";
export declare class TaskConsole extends Component {
    private _action;
    readonly actions: Array<IStudentAction>;
    render(): JSX.Element;
}

import * as React from 'react';
import { addAction, addPlainAction, IStudentAction } from 'graphlabs.core.notifier';
import { ToolButton } from '../ToolButton/ToolButton';
import {default as styled } from 'styled-components';
import { store } from '../../redux/store';
import { Component } from 'react';
import { Promise } from 'es6-promise';
import {actionsCreators as actions } from '../../redux/app/actions';
import Tooltip from '../Tooltip/Tooltip';

const ButtonList = styled.div`
  {
    display: block;
  }
`;

const taskId = 1; // TODO: get it from somewhere
const sessionGuid = 'uuid'; // TODO: get it from somewhere

export interface ButtonsState {
    show: boolean;
}

export class ToolButtonList extends Component<{}, ButtonsState> {

    // TODO: Add normal types to these variables (maybe Dictionary)
    public toolButtons: Object;

    private bound: HTMLDivElement;

    constructor(props: {}) {
        super(props);
        this.state = {
            show: false,
        };
        this.hide = this.hide.bind(this);
    }

    public componentWillMount() {
        this.toolButtons = {};
    }

    public render() {
        return this.getList();
    }

    public help(): string {
        return 'Test help example';
    }

    public beforeComplete(): Promise<any> {
        return Promise.resolve({success: true, fee: 0});
    }

    private dispatch(payload: IStudentAction): void {
        if (process.env.NODE_ENV === 'production') {
            addAction(payload).then(res => store.dispatch(res));
        } else {
            store.dispatch(addPlainAction(payload));
        }
        return void 0;
    }

    private hide() {
        this.setState({
            show: false,
        });
    }

    private setDefaultButtonList() {
        const setImg = (title: string) =>
            `http://gl-backend.svtz.ru:5000/odata/downloadImage(name='${title}.png')`;
        let list = {};
        list[setImg('Help')] = () => {
            this.dispatch({
                message: 'Help required',
                variantId: taskId,
                isTaskFinished: false,
                fee: 0,
                datetime: Date.now(),
            });
            this.setState({
                show: true,
            });
        };
        list[setImg('Complete')] = () => {
            this.beforeComplete().then(res => {
                this.dispatch({
                    message: `Task is done (${res.fee})`,
                    variantId: taskId,
                    isTaskFinished: false,
                    fee: res.fee,
                    datetime: Date.now(),
                });
                if (res.success) {
                    this.dispatch({
                        message: 'Task is checked',
                        variantId: taskId,
                        isTaskFinished: true,
                        fee: res.fee,
                        datetime: Date.now(),
                    });
                    store.dispatch(actions.setStatus(true));
                }
            });
        };
        return list;
    }

    private getList() {
        const result = [];
        const defaultList = this.setDefaultButtonList();
        for (const key in defaultList) {
            if (defaultList.hasOwnProperty(key)) {
                result.push(<div key={key}><ToolButton path={key} listener={defaultList[key]}/></div>);
            }
        }
        for (const key in this.toolButtons) {
            if (this.toolButtons.hasOwnProperty(key)) {
                result.push(<ToolButton key={key} path={key} listener={this.toolButtons[key]}/>);
            }
        }
        return (
            <div
                ref={i => {
                    this.bound = i;
                }}
            >
                <Tooltip value={this.help()} show={this.state.show} bound={this.bound} showTooltip={this.hide}/>
                <ButtonList>{result}</ButtonList>
            </div>
        );
    }
}

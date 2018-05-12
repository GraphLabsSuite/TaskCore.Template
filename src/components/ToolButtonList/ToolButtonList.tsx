import * as React from 'react';
import {addAction, addPlainAction, IStudentAction} from 'graphlabs.core.notifier';
import { ToolButton } from '../ToolButton/ToolButton';
import {default as styled } from 'styled-components';
import {store} from "../../redux/store";
import {Component} from "react";
import {Promise} from "es6-promise";

const ButtonList = styled.div`
  {
    display: block;
  }
`;

const taskId = 1; // TODO: get it from somewhere
const sessionGuid = 'uuid'; //TODO: get it from somewhere

export class ToolButtonList extends Component {

    // TODO: Add normal types to these variables (maybe Dictionary)
    public toolButtons: Object;

    componentWillMount() {
        this.toolButtons = {};
    }

    render() {
        return this.getList();
    }

    private dispatch(payload: IStudentAction): void {
      if (process.env.NODE_ENV === 'production') {
        addAction(payload).then(res => store.dispatch(res));
      } else {
        store.dispatch(addPlainAction(payload));
      }
      return void 0;
    }

    public beforeComplete(): Promise<any> {
      return Promise.resolve({ success: true, fee: 0 });
    }

    private setDefaultButtonList() {
        let list = {};
        list['/images/Help.png'] = () => {
            this.dispatch({
              message: 'Help required',
              taskId,
              sessionGuid,
              isTaskFinished: false,
              fee: 0,
              datetime: Date.now(),
            });
        };
        list['/images/Complete.png'] = () => {
            this.beforeComplete().then(res => {
              this.dispatch({
                message: 'Task is done',
                taskId,
                sessionGuid,
                isTaskFinished: false,
                fee: res.fee,
                datetime: Date.now(),
              });
              if (res.success) {
                this.dispatch({
                  message: 'Task is checked',
                  taskId,
                  sessionGuid,
                  isTaskFinished: true,
                  fee: res.fee,
                  datetime: Date.now(),
                });
              }
            });
        };
        list['/images/DontTouch.png'] = () => {
            this.dispatch({
              message: 'DON\'T TOUCH',
              taskId,
              sessionGuid,
              isTaskFinished: false,
              fee: 1,
              datetime: Date.now(),
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
                result.push(<ToolButton key={key} path={key} listener={this.toolButtons[key]} />);
            }
        }
        return <ButtonList>{result}</ButtonList>;
    }
}

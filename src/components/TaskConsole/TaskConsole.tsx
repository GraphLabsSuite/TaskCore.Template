import * as React from 'react';
import { IStudentAction } from 'graphlabs.core.notifier';
import { RootState } from '../../redux/rootReducer';
import {default as styled } from 'styled-components';
import {Component} from "react";
import {store} from "../../";

const Console = styled.div`
  {
    height: 100%;
    display: inline-block;
  }
`;

export class TaskConsole extends Component {

    private _action: Array<IStudentAction>;
    get actions(): Array<IStudentAction> {
      const state: RootState = store.getState();
      store.subscribe(() => {
        let flag = false;
        store.getState().notifier.studentActions.forEach((e, i) => {
           if (this._action[i] !== e) {
             flag = true;
           }
        });
        if (flag) {
          this._action = store.getState().notifier.studentActions;
          this.forceUpdate();
        }
      });
      this._action = [...state.notifier.studentActions];
      return this._action;
    }

    public render() {
        const actions = this.actions.map((i, index) => {
            const nData: number = i.datetime;
            let date = new Date(nData);
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let message = i.message;
            let result = hours + ':' + minutes + ':' + seconds + '  : ' + message;
            return <div key={index}>{result}</div>;
        });
        // This is the rest of console
        return (
          <Console>
            {actions}
          </Console>);
    }

}

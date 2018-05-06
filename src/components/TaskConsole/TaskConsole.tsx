import * as React from 'react';
import { IStudentAction } from 'graphlabs.core.notifier';
import { connect } from 'react-redux';

import { RootState } from '../../redux/rootReducer';
import {default as styled } from 'styled-components';
import {Component} from "react";

export interface TaskConsoleProperties {
    actions: Array<IStudentAction>;
}

const Console = styled.div`
  {
    height: 100%;
    display: inline-block;
  }
`;

class TaskConsole extends Component<TaskConsoleProperties> {
    public constructor(props: TaskConsoleProperties) {
        super(props);
    }

    public render() {
        const actions = this.props.actions.map(i => {
            let date = new Date(+(i.datetime.replace(/\s/g, '')));
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let message = i.message;
            let result = hours + ':' + minutes + ':' + seconds + '  : ' + message;
            return <div key={i.datetime}>{result}</div>;
        });
        // This is the rest of console
        return (
          <Console>
            {actions}
          </Console>);
    }

}

const mapStateToProps = (state: RootState) => ({
    actions: state.notifier.studentActions
});

export default connect<TaskConsoleProperties>(mapStateToProps)
    (TaskConsole);

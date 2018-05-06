import * as React from 'react';
import { addAction, IStudentAction } from 'graphlabs.core.notifier';
import { connect, Dispatch } from 'react-redux';

import { ToolButton } from '../ToolButton/ToolButton';
import { RootState } from '../../redux/rootReducer';
import { Action } from 'redux';
import {default as styled } from 'styled-components';

export interface ToolButtonListProperties {
    addAction: (payload: IStudentAction) => Promise<Action>;
}

const ButtonList = styled.div`
  {
    display: block;
  }
`;

class ToolButtonList extends React.Component<ToolButtonListProperties> {

    // TODO: Add normal types to these variables (maybe Dictionary)
    public toolButtons: Object;

    componentWillMount() {
        this.toolButtons = {};
    }

    render() {
        return this.getList();
    }

    private setDefaultButtonList() {
        let list = {};
        list['/images/Help.png'] = () => {
            this.props.addAction({
                message: 'Help required',
                fee: 0,
                datetime: Date.now().toLocaleString()
            });
        };
        list['/images/Complete.png'] = () => {
            this.props.addAction({
                message: 'Task is complete',
                fee: 0,
                datetime: Date.now().toLocaleString()
            });
        };
        list['/images/DontTouch.png'] = () => {
            this.props.addAction({
                message: 'DON\'T TOUCH',
                fee: 1,
                datetime: Date.now().toLocaleString()
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

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
  addAction: payload => addAction(payload).then(res => dispatch(res))
});

export default connect<{}, ToolButtonListProperties>(null, mapDispatchToProps)(ToolButtonList);
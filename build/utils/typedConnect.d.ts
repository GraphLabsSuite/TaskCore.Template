import * as React from 'react';
import { RootState } from '../redux/rootReducer';
import { Action, Dispatch } from 'redux';
export declare function typedConnect<OwnProps, StateProps extends Action<any>, DispatchProps>(mapStateToProps: (state: RootState, ownProps: OwnProps) => StateProps, mapDispatchToProps?: DispatchProps | ((dispatch: Dispatch<StateProps>, ownProps: OwnProps) => DispatchProps)): (component: React.FunctionComponent<OwnProps & StateProps & DispatchProps>) => React.FunctionComponent<OwnProps>;

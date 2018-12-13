/// <reference types="react" />
import * as React from "react";
import { RootState } from "../redux/rootReducer";
import { Dispatch } from "redux";
export declare function typedConnect<OwnProps, StateProps, DispatchProps>(mapStateToProps: (state: RootState, ownProps: OwnProps) => StateProps, mapDispatchToProps?: DispatchProps | ((dispatch: Dispatch<StateProps>, ownProps: OwnProps) => DispatchProps)): (component: React.StatelessComponent<OwnProps & StateProps & DispatchProps>) => React.StatelessComponent<OwnProps>;

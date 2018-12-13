import * as React from 'react';
import {default as styled, StyledFunction } from 'styled-components';
import { HTMLProps } from 'react';

interface MyButton {
  className: string;
  onClick: any;
}

const button: StyledFunction<MyButton & HTMLProps<HTMLDivElement>> = styled.button;

const ToolButtonStyle = button`
  {
    position: relative;
    width: 100%;
    margin-left: -50%;
    left: 50%;
  }
`;

export interface ToolButtonProperties {
  path: string;
  listener: () => void;
}

export class ToolButton extends React.Component<ToolButtonProperties, React.ComponentState> {

  public constructor(props: ToolButtonProperties) {
    super(props);
  }

  render() {
    return (
      <ToolButtonStyle className="btn btn-success" onClick={this.props.listener}>
        <img src={this.props.path}/>
      </ToolButtonStyle>);
  }
}
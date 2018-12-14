import * as React from 'react';
import { ToolButtonList } from '../ToolButtonList/ToolButtonList';

import {default as styled } from 'styled-components';

const Title = styled.div`
  {
    font-size: 100%;
  }
`;

export class TaskToolbar extends React.Component {
  public render() {
    const Buttons = this.getButtonList();
    return (
      <div>
        <Title>Панель инструментов</Title>
        <Buttons />
      </div>);
  }

  public getButtonList() {
    return ToolButtonList;
  }
}
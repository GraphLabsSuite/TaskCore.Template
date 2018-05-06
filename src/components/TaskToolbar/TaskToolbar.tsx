import * as React from 'react';
import ToolButtonList from '../ToolButtonList/ToolButtonList';

import {default as styled } from 'styled-components';

const Title = styled.div`
  {
    font-size: 100%;
  }
`;

export class TaskToolbar extends React.Component {
  public render() {
    return (
      <div>
        <Title>Панель инструментов</Title>
        <ToolButtonList />
      </div>);
  }
}
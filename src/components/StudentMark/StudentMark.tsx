import * as React from 'react';
import {default as styled, StyledFunction } from 'styled-components';
import { HTMLProps } from 'react';

export interface StudentMarkProperties {
}

export interface StudentMarkState {
  mark: number;
  message: string;
}

const div: StyledFunction<HTMLProps<HTMLDivElement>> = styled.div;
const p: StyledFunction<HTMLProps<HTMLParagraphElement>> = styled.p;

const Mark = p`
  {
    font-size: x-large;
    height: 100%;
    display: inline-block;
  }
`;

const MarkNegative = styled(Mark)`
  &&& {
    color: red;
  }
`;

const MarkPositive = styled(Mark)`
  &&& {
    color: green;
  }
`;

const MarkNeutral = styled(Mark)`
  &&& {
    color: yellow;
  }
`;

const StudentMarkStyle = div`
  {
    height: 100%;
    display: inline-block;
  }
`;

export class StudentMark extends React.Component<StudentMarkProperties, Partial<StudentMarkState>> {

  public constructor(props: StudentMarkProperties) {
    super(props);
    this.state = {
      mark: 50,
      message: ''
    };
  }

  public render() {
    /*for( var action : this.state.notifier.studentActions ){
        console.log( action );
    }*/
    const Par = this.getStyle();
    return (<StudentMarkStyle>
        <Par>{this.state.mark} {this.state.message}</Par>
      </StudentMarkStyle>
    );
  }

  private getStyle(): any {
    if (this.state.mark > 100) { return null; }
    if (this.state.mark > 75) { return MarkPositive; }
    if (this.state.mark > 60) { return MarkNeutral; }
    if (this.state.mark > 0) { return MarkNegative; }
    return '';
  }
}
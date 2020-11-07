import React from 'react';
import styled from '@emotion/styled';
import Task from '../models/task';

const DIV = styled.div`
  min-height: 100px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 100%;
  min-width: 200px;
  cursor: pointer;
`;

const P = styled.p`
  white-space: pre-wrap;
  word-break: break-word;
  caret-color rgb(55, 53, 47);
  font-size: 14px;
  font-weight: 500;
  pointer-events: none;
  font-family: sans-serif;
`;

export type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return (
    <DIV id={task.id}>
      <P>{task.name}</P>
    </DIV>
  );
}

export default TaskCard;

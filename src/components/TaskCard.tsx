import React from 'react';
import styled from '@emotion/styled';
import Task from '../models/task';
import FlexLayout from "../styles/FlexLayout";

const Layout = styled.div`
  width: 100%;
  min-width: 200px;
  cursor: pointer;
  padding: 1px 4px;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
`;

const P = styled.p`
  white-space: pre-wrap;
  word-break: break-word;
  caret-color rgb(55, 53, 47);
  font-size: 14px;
  font-weight: 500;
  pointer-events: none;
  text-align: start;
`;

export type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return (
    <Layout id={task.id}>
      <P>{task.name}</P>
    </Layout>
  );
}

export default TaskCard;

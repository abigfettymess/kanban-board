import React from 'react';
import styled from '@emotion/styled';
import Task, {TaskType} from '../models/task';
import FlexLayout from "../styles/FlexLayout";
import TaskList from "./TaskList";
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import {TASK1} from "../mock";
type Props = {
  tasks: Task[];
};

/* Grid layout */
const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 25rem 25rem 25rem;
  grid-column-gap: 50px;
  padding: 50px;
`;

const Title = styled.h1`
  
`;

const BaseLayout = styled(FlexLayout)`
	flex-direction: column;
	width: 100%;
`
const KanbanBoard = ({ }: Props) => {
  return (
    <BaseLayout>
      <Title>Task List</Title>
      <GridLayout>
        <TaskList type={TaskType.TO_DO} tasks={[TASK1]} />
        <TaskList type={TaskType.DOING} tasks={[]} />
        <TaskList type={TaskType.DONE} tasks={[]} />
      </GridLayout>
    </BaseLayout>
  );
}

export default KanbanBoard;

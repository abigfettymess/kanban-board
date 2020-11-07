import React, {useState} from 'react';
import styled from '@emotion/styled';
import Task, {TaskType} from '../models/task';
import FlexLayout from "../styles/FlexLayout";
import TaskList from "./TaskList";
import {TASK1} from "../mock";

type Props = {
  tasks: Task[];
};

/* Grid layout */
const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 25rem 25rem 25rem;
  grid-column-gap: 1rem;
  padding: 3rem;
`;

const Title = styled.h1`
  
`;

const BaseLayout = styled(FlexLayout)`
	flex-direction: column;
	width: 100%;
`
const KanbanBoard = ({ }: Props) => {
	const [list, setList] = useState<Task[]>([TASK1]);
	const onDrop = (e: React.DragEvent<HTMLDivElement>, id: string) => {
	
	};
	const DragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	}
  return (
    <BaseLayout>
      <Title>Task List</Title>
      <GridLayout>
        <TaskList type={TaskType.TO_DO} tasks={list.filter(t => t.type === TaskType.TO_DO)} />
        <TaskList type={TaskType.DOING} tasks={list.filter(t => t.type === TaskType.DOING)} />
        <TaskList type={TaskType.DONE} tasks={list.filter(t => t.type === TaskType.DONE)} />
      </GridLayout>
    </BaseLayout>
  );
}

export default KanbanBoard;

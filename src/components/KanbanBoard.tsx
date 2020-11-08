import React, {useState} from 'react';
import styled from '@emotion/styled';
import Task, {TaskType} from '../models/task';
import FlexLayout from "../styles/FlexLayout";
import TaskList from "./TaskList";
import {TASK1} from "../mock";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";

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
	const onDrop = (e: React.DragEvent<HTMLDivElement>, id: string) => {
	
	};
	const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	};
	
	const onDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
		e.dataTransfer.setData("id", id);
	};
	
	const dispatch = useDispatch();
	const selector = useSelector((state: RootState) => state.tasks);
	const list = selector.tasks;
  return (
    <BaseLayout>
      <Title>Task List</Title>
      <GridLayout>
        <TaskList
	        onDrop={onDrop}
	        onDragOver={onDragOver}
	        onDragStart={onDragStart}
	        type={TaskType.TO_DO}
	        tasks={list.filter(t => t.type === TaskType.TO_DO)}
        />
        <TaskList
	        onDrop={onDrop}
	        onDragOver={onDragOver}
	        onDragStart={onDragStart}
	        type={TaskType.DOING} tasks={list.filter(t => t.type === TaskType.DOING)}
        />
        <TaskList
	        onDrop={onDrop}
	        onDragOver={onDragOver}
	        onDragStart={onDragStart}
	        type={TaskType.DONE}
	        tasks={list.filter(t => t.type === TaskType.DONE)}
        />
      </GridLayout>
    </BaseLayout>
  );
}

export default KanbanBoard;

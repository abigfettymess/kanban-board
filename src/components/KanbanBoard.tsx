import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import Task, {TaskType} from '../models/task';
import FlexLayout from "../styles/FlexLayout";
import TaskList from "./TaskList";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {onGet} from "../api";
import {addAllTask} from "../actions/tasks";

type Props = {
  tasks: Task[];
};

/* Grid layout */
const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 25em 25em 25em;
  grid-column-gap: 1em;
  padding: 3rem;
`;

const Title = styled.h1`
  
`;

const BaseLayout = styled(FlexLayout)`
	flex-direction: column;
	width: 100%;
`
const KanbanBoard = ({ }: Props) => {
	useEffect(() => {
		onGet<Task[]>('api/v1/tasks')
			.then((res) => {
				dispatch(addAllTask(res.data));
			});
		
	}, []);
	
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
	        tasks={list.filter(t => t.task_type === TaskType.TO_DO)}
        />
        <TaskList
	        onDrop={onDrop}
	        onDragOver={onDragOver}
	        onDragStart={onDragStart}
	        type={TaskType.DOING} tasks={list.filter(t => t.task_type === TaskType.DOING)}
        />
        <TaskList
	        onDrop={onDrop}
	        onDragOver={onDragOver}
	        onDragStart={onDragStart}
	        type={TaskType.DONE}
	        tasks={list.filter(t => t.task_type === TaskType.DONE)}
        />
      </GridLayout>
    </BaseLayout>
  );
}

export default KanbanBoard;

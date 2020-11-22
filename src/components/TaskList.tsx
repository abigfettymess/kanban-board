import React from 'react';
import styled from '@emotion/styled';
import Task, { TaskType } from '../models/task';
import { Tasks } from '../reducer/tasks';
import TaskCard from './TaskCard';
import Pill from "./pills";
import Dragible from "./Dragible";
import {useDispatch, useSelector} from "react-redux";
import {RootAction} from "../actions";
import {RootState} from "../store";
import {addTask, setDragging, updateTask} from "../actions/tasks";
import FlexLayout from '../styles/FlexLayout';
import AddButton from "../AddButton";
import {onGet, onPost, onPut} from "../api";

export type Props = {
  type: TaskType;
  tasks: Tasks;
  onDrop: (e: React.DragEvent<HTMLDivElement>, id: string) => void;
	onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
	onDragStart: (e: React.DragEvent<HTMLDivElement>, id: string) => void;
};

const GetLabel = (type: TaskType) => {
  switch (type) {
    case TaskType.DOING:
      return 'Doing';
    case TaskType.DONE:
      return 'Done';
    case TaskType.TO_DO:
      return 'To Do';
    case TaskType.HIDDEN:
      return 'Hidden';
  }

  const S: never = type;
  return S;
}
const GetColor = (type: TaskType) => {
  switch (type) {
    case TaskType.DOING:
      return '#ebaa00';
    case TaskType.DONE:
      return '#008769';
    case TaskType.TO_DO:
      return '#ff0019';
    case TaskType.HIDDEN:
      return '#fff';
  }

  const S: never = type;
  return S;
};

const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const PillLayout = styled.div`
	padding: 10px;
`;

const P = styled.p`

`;

const CardsLayout = styled.div`
	/* Each child should be 10px */
	& * {
		margin-top: 10px;
	}
`;

const DragAndDrop = styled.div`

`;

const TaskList = ({ type, tasks }: Props) => {
	const dispatch = useDispatch();
	const selector = useSelector((state: RootState) => state.tasks);
	console.log(selector.dragging);
	
	const onDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
		console.log('onDragStart');
		e.dataTransfer.setData('id', id);
		dispatch(setDragging(true));
	};
	
	const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	};
	
	const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
		const id = e.dataTransfer.getData("id");

		const found = selector.tasks.find(t => t.id == (id));
		if (!found) { return; }
		
		const C: Task = {
			...found,
			task_type: type
		};
		onPut<Task>(`api/v1/tasks/${found.id}`, C)
			.then((res) => {
				dispatch(setDragging(false));
				dispatch(updateTask(res.data));
			});
		
	};
	
	const onAdd = () => {
		const t: Task = {
			task_type: type,
			id: 'place_holder',
			description: 'test',
			name: 'test',
		};
		
		onPost<Task>('api/v1/tasks', t).then((res) => {
			dispatch(addTask(res.data));
		})
	};
	
  return (
    <ListLayout
	    className="droppable"
	    style={{ border: selector.dragging ? '1px solid red': '' }}
	    onDrop={onDrop}
	    onDragOver={onDragOver}>
	    <FlexLayout>
		    <PillLayout>
			    <Pill color={GetColor(type)} >
				    <>{GetLabel(type)}</>
			    </Pill>
		    </PillLayout>
		    <AddButton onClick={onAdd} />
	    </FlexLayout>


      <CardsLayout >
	      {tasks.map((task: Task, index: number) => (
		      <div draggable={true} onDragStart={(e: React.DragEvent<HTMLDivElement>) => onDragStart(e, task.id)}>
			      <TaskCard key={index} task={task} />
		      </div>
	      ))}
      </CardsLayout>
    </ListLayout>
  );
}

export default TaskList;

import React from 'react';
import styled from '@emotion/styled';
import Task, { TaskType } from '../models/task';
import { Tasks } from '../reducer/tasks';
import TaskCard from './TaskCard';
import Pill from "./pills";

export type Props = {
  type: TaskType;
  tasks: Tasks;
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
  border: 1px solid black;
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
	
	const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
		console.log(e);
	}
	
	const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		console.assert(e);
	};
  return (
    <ListLayout>
	    <PillLayout>
		    <Pill color={GetColor(type)} >
			    <>{GetLabel(type)}</>
		    </Pill>
	    </PillLayout>
      <DragAndDrop
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
	      <CardsLayout>
		      {tasks.map((task: Task, index: number) => (
			      <TaskCard key={index} task={task} />
		      ))}
	      </CardsLayout>
      </DragAndDrop>
 
    </ListLayout>
  );
}

export default TaskList;

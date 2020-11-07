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

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
`;

const P = styled.p`

`;

const TaskList = ({ type, tasks }: Props) => { 
  return (
    <DIV>
      <Pill color={GetColor(type)} >
        <>{GetLabel(type)}</>
      </Pill>
      <div>
        {tasks.map((task: Task, index: number) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </DIV>
  );
}

export default TaskList;

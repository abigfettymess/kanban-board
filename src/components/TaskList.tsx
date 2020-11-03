import React from 'react';
import styled from '@emotion/styled';
import Task, { TaskType } from '../models/task';
import { Tasks } from '../reducer/tasks';
import TaskCard from './TaskCard';

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
      return 'Todo';
    case TaskType.HIDDEN:
      return 'Hidden';
  }

  const S: never = type;
  return S;
}

const DIV = styled.div`
  
`;

const P = styled.p`

`;

const TaskList = ({ type, tasks }: Props) => { 
  return (
    <DIV>
      <P>{GetLabel(type)}</P>
      <div>
        {
          tasks.map((task: Task, index: number) => (
            <TaskCard key={index} task={task} />
          ))
        }
      </div>
    </DIV>
  );
}

export default TaskList;

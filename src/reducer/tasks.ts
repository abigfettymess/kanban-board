import Task from '../models/task';
import { RootAction } from '../actions';

export type Tasks = Task[];
export type TasksState = {
  readonly tasks: Tasks;
}

const reducerFunc = (state: TasksState, action: RootAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducerFunc;

import * as types from '../constants/types';
import Task from '../models/task';

type OnAddTask = {
  type: typeof types.ADD_TASK;
  payload: Task;
}

type OnDeleteTask = {
  type: typeof types.DELETE_TASK;
  payload: Task;
}

type OnUpdateTask = {
  type: typeof types.UPDATE_TASK;
  payload: Task;
}

export const addTask = (payload: Task) => ({
	type: types.ADD_TASK,
	payload,
});

export const deleteTask = (payload: Task) => ({
	type: types.DELETE_TASK,
	payload,
});

export const updateTask = (payload: Task) => ({
	type: types.UPDATE_TASK,
	payload,
});

export type TasksActionType = OnAddTask | OnDeleteTask | OnUpdateTask;
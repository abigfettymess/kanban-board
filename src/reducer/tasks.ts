import Task from '../models/task';
import * as types from '../constants/types';
import { RootAction } from '../actions';

export type Tasks = Task[];
export type TasksState = {
  readonly tasks: Tasks;
}

const initialState: TasksState = {
	tasks: [],
};

export default (state: TasksState = initialState, action: RootAction) => {
  switch (action.type) {
	  case types.ADD_ALL_TASKS:
	  	return {
	  		...state,
			  tasks: [...state.tasks, ...action.payload]
		  }
	  case types.ADD_TASK:
	  	return {
	  		...state,
			  tasks: [...state.tasks, action.payload],
		  };
	  case types.DELETE_TASK:
	  	return {
	  		...state,
			  tasks: state.tasks.filter(t => t.id !== action.payload.id),
		  };
	  case types.UPDATE_TASK:
	  	return {
	  		...state,
			  tasks: state.tasks.map((t) => {
			  	if (t.id === action.payload.id) {
			  		return action.payload;
				  }
			  	return t;
			  })
		  };
    default:
      return state;
  }
};

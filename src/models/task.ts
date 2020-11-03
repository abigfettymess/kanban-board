interface Task {
  id: string;
  name: string;
  type: TaskType;
}

/* Task types */
export enum TaskType {
  DOING = 'DOING',
  TO_DO = 'TO_DO',
  DONE = 'DONE',
  HIDDEN = 'HIDDEN',
}

export default Task;

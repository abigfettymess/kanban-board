interface Task {
  id: string;
  name: string;
  task_type: TaskType;
  description: string;
  created_at?: string;
  update_at?: string;
}

/* Task types */
export enum TaskType {
  DOING = 'doing',
  TO_DO = 'to-do',
  DONE = 'done',
  HIDDEN = 'hidden',
}

export default Task;

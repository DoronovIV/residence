import { TaskType } from './task-type.enum';

export interface Task {
  id: number;
  index: number;
  type: TaskType;
  title: string;
}

import { TaskCategory } from './task-category.type';

export interface Task {
  id: number;
  index: number;
  type: TaskCategory;
  title: string;
}

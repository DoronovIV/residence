import { ObjectValues } from '../../core';

export const TaskCategory = {
  Story: 'story',
  Feature: 'feature',
  Bugfix: 'bugfix',
  Other: 'other',
};

export type TaskCategory = ObjectValues<typeof TaskCategory>;

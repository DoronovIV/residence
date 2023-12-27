import { ObjectValues } from '../core';

export const Color = {
  Background: 'background',
  Red: 'red',
  Green: 'green',
  Yellow: 'yellow',
  Violet: 'violet',
} as const;

export type Color = ObjectValues<typeof Color>;

import { ObjectValues } from 'src/app/model/core';

export const ButtonOptions = {
  Default: 'default',
  Rounded: 'rounded',
  Thick: 'thick',
} as const;

export type ButtonOptions = ObjectValues<typeof ButtonOptions>;

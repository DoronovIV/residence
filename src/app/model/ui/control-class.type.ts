import { ObjectValues } from '../core';

export const ControlClass = {
  Unread: 'unreal',
  Flat: 'flat',
  Raised: 'raised',
  Disabled: 'disabled',
} as const;

export type ControlClass = ObjectValues<typeof ControlClass>;

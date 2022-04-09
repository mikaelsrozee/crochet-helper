import {atom} from 'recoil';

export const backgroundColor = atom<number>({
  key: 'backgroundColor', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

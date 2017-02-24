import { SWITCH_PLAYER } from '../constants';

export const switchPlayer = nextPlayer => {
  type: SWITCH_PLAYER,
  nextPlayer,
};

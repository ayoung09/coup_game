import { RECEIVE_GAME_DATA, CREATE_NEW_PLAYER, ENTER_GAME } from '../constants';

export const receiveGameData = gameData => ({
  type: RECEIVE_GAME_DATA,
  characters: gameData.characters,
  actions: gameData.actions,
});

export const createNewPlayer = newPlayer => ({
  type: CREATE_NEW_PLAYER,
  newPlayer,
});

export const enterGame = isActive => ({
  type: ENTER_GAME,
  gameActive: isActive,
});

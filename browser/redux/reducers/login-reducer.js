import { RECEIVE_GAME_DATA, CREATE_NEW_PLAYER, ENTER_GAME } from '../constants';

const initialLoginState = {
  players: [],
  characters: [],
  actions: [],
  gameActive: false,
};

const loginReducer = (state = initialLoginState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_GAME_DATA:
      newState.characters = action.characters;
      newState.actions = action.actions;
      console.log('game data received! new state is: ', newState);
      break;

    case CREATE_NEW_PLAYER:
      newState.players = newState.players.concat(action.newPlayer);
      console.log('new player created! new state is: ', newState);
      break;

    case ENTER_GAME:
      newState.gameActive = action.gameActive;
      break;

    default:
      return state;
  }
  return newState;
};

export default loginReducer;

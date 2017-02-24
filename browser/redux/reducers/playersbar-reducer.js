import { SWITCH_PLAYER } from '../constants';

const samplePlayers = [{
  socketid: 1,
  name: 'Abra',
  character1: {name: 'Duke', isAlive: false},
  character2: {name: 'Contessa', isAlive: true},
  coins: 2,
  activeCharacters: 1,
},
{
  socketid: 2,
  name: 'Lion',
  character1: {name: 'Assassin', isAlive: true},
  character2: {name: 'Ambassador', isAlive: true},
  coins: 2,
  activeCharacters: 2,
},
{
  socketid: 3,
  name: 'Tiger',
  character1: {name: 'Duke', isAlive: true},
  character2: {name: 'Captain', isAlive: false},
  coins: 4,
  activeCharacters: 1,
}];

const initialPlayersBarState = {
  players: samplePlayers,
  currentPlayer: {},
  hiddenCardImg: 'http://www.hearthstonetopdecks.com/wp-content/uploads/2014/06/card-back-default-201x300.png',
};

const playersBarReducer = (state = initialPlayersBarState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case SWITCH_PLAYER:
      newState.currentPlayer = action.nextPlayer;
      break;

    default:
      return state;
  }
  return newState;
};

export default playersBarReducer;

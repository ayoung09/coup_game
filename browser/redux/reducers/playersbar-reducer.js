import { SWITCH_PLAYER } from '../constants';
import path from 'path';
import samplePlayers from '../../../samplePlayers';


const initialPlayersBarState = {
  players: samplePlayers,
  currentPlayer: {},
  hiddenCardImg: path.join(__dirname, 'hidden-card.png'),
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

//'http://www.hearthstonetopdecks.com/wp-content/uploads/2014/06/card-back-default-201x300.png'

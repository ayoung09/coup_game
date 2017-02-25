import { combineReducers } from 'redux';

import playersbarReducer from './playersbar-reducer';
import loginReducer from './login-reducer';
import myCardsReducer from './mycards-reducer';
import courtDeckReducer from './courtdeck-reducer';

const rootReducer = combineReducers({
  playersbar: playersbarReducer,
  login: loginReducer,
  myCards: myCardsReducer,
  courtDeck: courtDeckReducer,
});

export default rootReducer;

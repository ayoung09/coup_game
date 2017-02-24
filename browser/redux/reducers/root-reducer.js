import { combineReducers } from 'redux';

import playersbarReducer from './playersbar-reducer';
import loginReducer from './login-reducer';
import myCardsReducer from './mycards-reducer';

const rootReducer = combineReducers({
  playersbar: playersbarReducer,
  login: loginReducer,
  myCards: myCardsReducer,
});

export default rootReducer;

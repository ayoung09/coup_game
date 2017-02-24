import { combineReducers } from 'redux';

import playersbarReducer from './playersbar-reducer';
import loginReducer from './login-reducer';

const rootReducer = combineReducers({
  playersbar: playersbarReducer,
  login: loginReducer,
});

export default rootReducer;

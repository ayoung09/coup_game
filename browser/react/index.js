'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory, Route } from 'react-router';

import axios from 'axios';

import store from '../store';
import App from './components/App';
import LoginContainer from './containers/LoginContainer';

import { receiveGameData } from '../redux/action-creators/login';
import { buildDeck } from '../redux/action-creators/courtdeck';

const onGameEnter = () => {
  axios.get('/api/game')
  .then(gameData => {
    store.dispatch(receiveGameData(gameData.data));
    store.dispatch(buildDeck(gameData.data.characters));
  });
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={LoginContainer}></Route>
      <Route path="/game" onEnter={onGameEnter} component={App}></Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

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

const onAppEnter = () => {
  axios.get('/api/game')
  .then(gameData => {
    store.dispatch(receiveGameData(gameData.data));
  });
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={LoginContainer} onEnter={onAppEnter}></Route>
      <Route path="/game" component={App}></Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

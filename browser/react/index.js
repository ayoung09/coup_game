'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory, Route } from 'react-router';

import axios from 'axios';

import store from '../store';
import App from './components/App';

import { receiveGameData } from

const onAppEnter = () => {
  axios.get('/api/game')
  .then(gameData => {
    store.dispatch(receiveGameData(gameData));
  });
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} onEnter={onAppEnter}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

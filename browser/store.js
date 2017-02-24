import React from 'react';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/root-reducer';

const store = createStore(rootReducer);

export default store;

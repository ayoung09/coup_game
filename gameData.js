'use strict';

const path = require('path');

const characters = [{
  id: 1,
  name: 'Duke',
  action: 'Tax',
  effect: 'Take 3 coins',
  counteraction: 'Blocks foreign aid',
  image: path.join(__dirname, 'duke.png'),
}, {
  id: 2,
  name: 'Assassin',
  action: 'Assasinate',
  effect: 'Pay 3 coins',
  counteraction: null,
  image: path.join(__dirname, 'assassin.png'),
}, {
  id: 3,
  name: 'Ambassador',
  action: 'Exchange',
  effect: 'Exchange cards with Court Deck',
  counteraction: 'Blocks stealing',
  image: path.join(__dirname, 'ambassador.png'),
}, {
  id: 4,
  name: 'Captain',
  action: 'Steal',
  effect: 'Take 2 coins from another player',
  counteraction: 'Blocks stealing',
  image: path.join(__dirname, 'captain.png'),
}, {
  id: 5,
  name: 'Contessa',
  action: null,
  effect: null,
  counteraction: 'Blocks assassination',
  image: path.join(__dirname, 'contessa.png'),
}];

const actions = [{
  id: 1,
  action: 'Income',
  effect: 'Take 1 coin',
  blockable: false,
  target: null,
}, {
  id: 2,
  action: 'Foreign Aid',
  effect: 'Take 2 coins',
  blockable: true,
  target: null,
}, {
  id: 3,
  action: 'Coup',
  effect: 'Pay 7 coins',
  blockable: false,
  target: {},
}, {
  id: 4,
  action: 'Steal',
  effect: 'Take 2 coins',
  blockable: true,
  target: {},
}, {
  id: 5,
  action: 'Exchange',
  effect: 'Exchange cards with court deck',
  blockable: false,
  target: null,
}, {
  id: 6,
  action: 'Tax',
  effect: 'Take 3 coins',
  blockable: false,
  target: {},
}, {
  id: 7,
  action: 'Assasinate',
  effect: 'Pay 3 coins',
  blockable: true,
  target: {},
}];

module.exports = { characters, actions };

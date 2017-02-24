'use strict';

const characters = [{
  id: 1,
  name: 'Duke',
  action: 'Tax',
  effect: 'Take 3 coins',
  counteraction: 'Blocks foreign aid',
  image: '',
}, {
  id: 2,
  name: 'Assassin',
  action: 'Assasinate',
  effect: 'Pay 3 coins',
  counteraction: null,
  image: '',
}, {
  id: 3,
  name: 'Ambassador',
  action: 'Exchange',
  effect: 'Exchange cards with Court Deck',
  counteraction: 'Blocks stealing',
  image: '',
}, {
  id: 4,
  name: 'Captain',
  action: 'Steal',
  effect: 'Take 2 coins from another player',
  counteraction: 'Blocks stealing',
  image: '',
}, {
  id: 5,
  name: 'Contessa',
  action: null,
  effect: null,
  counteraction: 'Blocks assassination',
  image: '',
}];

const actions = [{
  id: 1,
  action: 'Income',
  effect: 'Take 1 coin',
}, {
  id: 2,
  action: 'Foreign Aid',
  effect: 'Take 2 coins',
}, {
  id: 3,
  action: 'Coup',
  effect: 'Pay 7 coins',
}];

module.exports = { characters, actions };

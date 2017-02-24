import React from 'react';
import path from 'path';
import { RECEIVE_TWO_CARDS, RECEIVE_ONE_CARD, KILL_CARD, RETURN_CARD_TO_DECK, TOGGLE_CARDS } from '../constants';

const sampleMyCards = [{
  id: 1,
  name: 'Duke',
  action: 'Tax',
  effect: 'Take 3 coins',
  counteraction: 'Blocks foreign aid',
  image: path.join(__dirname, 'duke.png'),
  isAlive: false
}, {
  id: 5,
  name: 'Contessa',
  action: null,
  effect: null,
  counteraction: 'Blocks assassination',
  image: path.join(__dirname, 'contessa.png'),
  isAlive: true}
    ];

const initialMyCardsState = {
  myCards: sampleMyCards,
  visible: false,
};

const myCardsReducer = (state = initialMyCardsState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TWO_CARDS:
      newState.myCards = newState.myCards.concat(action.newCards);
      break;

    case RECEIVE_ONE_CARD:
      newState.myCards = newState.myCards.concat(action.newCard);
      break;

    case RETURN_CARD_TO_DECK:
      let i = action.index;
      let newCards = i === 0 ? newState.myCards.shift() : newState.myCards.splice(0, i).concat(newState.myCards.splice(i));
      newState.myCards = newCards;
      break;

      case TOGGLE_CARDS:
        newState.visible = state.visible === false ? true : false;
      break;

      case KILL_CARD:
        newState.myCards[action.index].isAlive = false;
        break;

    default:
      return state;
  }
  return newState;
};

export default myCardsReducer;

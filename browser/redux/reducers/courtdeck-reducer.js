import React from 'react';
import { BUILD_DECK, TAKE_TOP_TWO_CARDS, SHUFFLE_DECK, PICK_RANDOM_CARD, ADD_CARD_TO_DECK } from '../constants';
import shuffle from 'shuffle-array';

const initialCourtDeckState = {
  cards: [],
  cardsToPlayer: [],
};

const courtDeckReducer = (state = initialCourtDeckState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case BUILD_DECK:
      newState.cards = action.fullDeck;
      break;

    case TAKE_TOP_TWO_CARDS:
      newState.cardsToPlayer = [newState.cards.shift(), newState.cards.shift()];
      break;

    case SHUFFLE_DECK:
      newState.cards = shuffle(newState.cards);
      break;

    case PICK_RANDOM_CARD:
      newState.cardsToPlayer = [shuffle.pick(newState.cards)];
      break;

    default:
      return state;
  }
  return newState;
};

export default courtDeckReducer;

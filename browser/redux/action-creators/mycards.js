import { RECEIVE_TWO_CARDS, RECEIVE_ONE_CARD, KILL_CARD, RETURN_CARD_TO_DECK, TOGGLE_CARDS } from '../constants';

export const receiveTwoCards = cardsArr => ({
  type: RECEIVE_TWO_CARDS,
  newCards: cardsArr,
});

export const receiveOneCard = cardObj => ({
  type: RECEIVE_ONE_CARD,
  newCard: [cardObj],
});

export const killCard = cardIndex => ({
  type: KILL_CARD,
  index: cardIndex,
});

export const returnCardToDeck = cardIndex => ({
  type: RETURN_CARD_TO_DECK,
  index: cardIndex,
});

export const toggleCards = () => ({
  type: TOGGLE_CARDS,
});

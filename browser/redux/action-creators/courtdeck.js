import { BUILD_DECK, TAKE_TOP_TWO_CARDS, SHUFFLE_DECK, PICK_RANDOM_CARD } from '../constants';

function buildInitialDeck (charactersArr) {
  const initialDeck = [];
  let i = 0;
  while (initialDeck.length < 15) {
    initialDeck.push(charactersArr[i]);
    i = i === 4 ? 0 : i + 1;
  }
  return initialDeck;
}

export const buildDeck = charactersArr => ({
  type: BUILD_DECK,
  fullDeck: buildInitialDeck(charactersArr),
});

export const takeTopTwoCards = () => ({
  type: TAKE_TOP_TWO_CARDS,
});

export const shuffleDeck = () => ({
  type: SHUFFLE_DECK,
});

export const pickRandomCard = () => ({
  type: PICK_RANDOM_CARD,
});

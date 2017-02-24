import React from 'react';
import { connect } from 'react-redux';
import MyCards from '../components/MyCards';
import { receiveTwoCards, receiveOneCard, killCard, returnCardToDeck, toggleCards } from '../../redux/action-creators/mycards';

function mapStateToProps(state) {
  return {
    myCards: state.myCards.myCards,
    visible: state.myCards.visible,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    receiveTwoCards: (cardsArr) => {dispatch(receiveTwoCards(cardsArr));},
    receiveOneCard: (cardObj) => {dispatch(receiveOneCard(cardObj));},
    killCard: (cardIndex) => {dispatch(killCard(cardIndex));},
    returnCardToDeck: (cardIndex) => {dispatch(returnCardToDeck(cardIndex));},
    toggleCards: () => {dispatch(toggleCards());},
  };
}

const MyCardsContainer = connect(mapStateToProps, mapDispatchToProps)(MyCards);

export default MyCardsContainer;

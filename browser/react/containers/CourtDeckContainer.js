import React from 'react';
import { connect } from 'react-redux';
import CourtDeck from '../components/CourtDeck';
import { takeTopTwoCards, shuffleDeck, pickRandomCard } from '../../redux/action-creators/courtdeck';

function mapStateToProps(state) {
  return {
    cards: state.courtDeck.cards,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    takeTopTwoCards: () => {dispatch(takeTopTwoCards());},
    shuffleDeck: () => {dispatch(shuffleDeck());},
    pickRandomCard: () => {dispatch(pickRandomCard());},
  };
}

const CourtDeckContainer = connect(mapStateToProps, mapDispatchToProps)(CourtDeck);

export default CourtDeckContainer;

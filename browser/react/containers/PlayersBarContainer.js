import React from 'react';
import PlayersBar from '../components/PlayersBar';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    players: state.playersbar.players,
    currentPlayer: state.playersbar.currentPlayer,
    hiddenCardImg: state.playersbar.hiddenCardImg,
  };
}

function mapDispatchToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersBar);

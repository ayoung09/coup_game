import React from 'react';
import { connect } from 'react-redux';
import ActionBox from '../components/ActionBox';

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const ActionBoxContainer = connect(mapStateToProps, mapDispatchToProps)(ActionBox);

export default ActionBoxContainer;

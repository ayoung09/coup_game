import React from 'react';
import { connect } from 'react-redux';
import ActionBox from '../components/ActionBox';
import { toggleInfo } from '../../redux/action-creators/actionbox';

function mapStateToProps(state) {
  return {
    actions: state.login.actions,
    currentAction: state.actionBox.currentAction,
    infoVisible: state.actionBox.infoVisible,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleInfo: () => {dispatch(toggleInfo());},
  };
}

const ActionBoxContainer = connect(mapStateToProps, mapDispatchToProps)(ActionBox);

export default ActionBoxContainer;

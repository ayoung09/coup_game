import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import store from '../../store';
import { createNewPlayer } from '../../redux/action-creators/login';

const newPlayer = {
  socketId: null,
  name: '',
  character1: null,
  character2: null,
  coins: 2,
  activeCharacters: 2
};

class LoginContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    newPlayer.name = this.state.inputValue;
    store.dispatch(createNewPlayer(newPlayer));

    this.setState({
      inputValue: ''
    });
  }

  render() {
    return (
      <Login
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        inputValue={this.state.inputValue}
      />
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

export default LoginContainer;

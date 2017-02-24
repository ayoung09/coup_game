import React from 'react';
import { Link } from 'react-router';

const EnterGame = (props) => {

  return (
    <div className="well" style={{marginTop: '20px'}}>
      <p>Click below once all players have logged in</p>
      <Link to="/game">
        <button
          type="submit"
          className="btn btn-success">
          Enter Game
        </button>
      </Link>
    </div>

  );
};

export default EnterGame;

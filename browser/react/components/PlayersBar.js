import React from 'react';

import PlayerCard from './PlayerCard';

const PlayersBar = (props) => {
  console.log('These are props: ', props);
  return (
    <div id="players-bar" className="panel panel-default">
      <div className="panel-heading">Players</div>
      <div className="panel-body">
        {props.players.map((player, index) => {
          return <PlayerCard key={index} player={player} hiddenCardImg={props.hiddenCardImg} />
        })}
      </div>
    </div>
  );
};

export default PlayersBar;

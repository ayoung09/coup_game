import React from 'react';

import PlayerCard from './PlayerCard';

const PlayersBar = (props) => {
  const firstRowPlayers = props.players.splice(0,3);
  const secondRowPlayers = props.players.splice(-3);


  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <h4>Players</h4>
        </div>
      </div>

      <div className="row">
        {firstRowPlayers.map((player, index) => {
          return <PlayerCard key={index} player={player} hiddenCardImg={props.hiddenCardImg} />
        })}
      </div>

            <div className="row">
        {secondRowPlayers.map((player, index) => {
          return <PlayerCard key={index} player={player} hiddenCardImg={props.hiddenCardImg} />
        })}
      </div>

    </div>
  );
};

export default PlayersBar;

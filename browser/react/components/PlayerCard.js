import React from 'react';

const PlayerCard = (props) => {
  const player = props.player;
  const hidden = props.hiddenCardImg;

  console.log('Am I getting to playercard?');

  return (
    <div className="col-xs-2">
      <div className="thumbnail">
        <h5>
          <span>{ player.name }</span>
        </h5>
        <img className="card-thumbnail" src={ hidden } />
        <img className="card-thumbnail" src={ hidden } />
        <div className="caption">
          <small>Coins: { player.coins }</small>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;

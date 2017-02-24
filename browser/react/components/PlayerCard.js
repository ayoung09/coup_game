import React from 'react';
import SingleCard from './SingleCard';

const PlayerCard = (props) => {
  const player = props.player;
  const hidden = props.hiddenCardImg;
  const char1Img = player.character1.isAlive ? hidden : player.character1.image;
  const char2Img = player.character2.isAlive ? hidden : player.character2.image;


  return (
    <div className="col-md-4">
      <div className="thumbnail">
        <h4>
          <span>{ player.name }</span>
        </h4>

          <SingleCard cardView={char1Img} />
          <SingleCard cardView={char2Img} />

        <div className="caption">
          <h5>
            <span>Coins: { player.coins }</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;

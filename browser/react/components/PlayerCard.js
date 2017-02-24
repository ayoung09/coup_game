import React from 'react';
import SingleCard from './SingleCard';

const PlayerCard = (props) => {
  const player = props.player;
  const hidden = props.hiddenCardImg;
  const char1Img = player.character1.isAlive ? hidden : player.character1.image;
  const char2Img = player.character2.isAlive ? hidden : player.character2.image;


  return (
    <div className="col-md-4 portfolio-item">
            <img className="img-responsive" src={char1Img} />
            <img className="img-responsive" src={char2Img} />
        <h4>{ player.name }</h4>
        <h5>Coins: { player.coins }</h5>
    </div>
  );
};

export default PlayerCard;

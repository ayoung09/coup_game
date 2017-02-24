import React from 'react';

const MyCards = (props) => {
  const myPlayer = props.myPlayer;
  const hidden = props.hiddenCardImg;
  const myChar1Img = myPlayer.character1.isAlive ? hidden : myPlayer.character1.image;
  const myChar2Img = myPlayer.character2.isAlive ? hidden : myPlayer.character2.image;

  return (

    )
}

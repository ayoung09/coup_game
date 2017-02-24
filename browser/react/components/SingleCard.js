import React from 'react';

const SingleCard = (props) => {
  const cardView = props.cardView;

  return (
    <img src={cardView} alt="" />
  );
};

export default SingleCard;

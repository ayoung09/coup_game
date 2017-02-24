import React from 'react';

const SingleCard = (props) => {
  const cardView = props.cardView;

  return (
      <img className="card-thumbnail" src={cardView} />
  );
};

export default SingleCard;

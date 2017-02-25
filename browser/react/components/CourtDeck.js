import React from 'react';
import path from 'path';

const CourtDeck = (props) => {
  return (
    <div id="court-deck" className="col-md-4">
      <img src={path.join(__dirname, 'hidden-card.png')} />
      <h4>Cards in Court Deck: { props.cards.length }</h4>
    </div>
  );
};

export default CourtDeck;

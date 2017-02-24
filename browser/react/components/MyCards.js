import React from 'react';
import SingleCard from './SingleCard';

const MyCards = (props) => {
  const myCards = props.myCards;

  const cardMap = myCards.map((card, i) => {
    return (
      <button>
        <SingleCard cardView={card.image} cardIndex={i} />
      </button>
    );
  });

  const noCardsMsg = <span>Waiting to receive cards</span>;

  const viewToRender = myCards.length > 0 ? cardMap : noCardsMsg;

  return (
    <footer>
      <div className="row">
        <div className="col-md-6">
          <button onClick={props.toggleCards}>
            <h4>My Cards</h4>
          </button>
          <div>
            { props.visible && viewToRender }
          </div>
        </div>
      </div>
    </footer>
    );
};

export default MyCards;

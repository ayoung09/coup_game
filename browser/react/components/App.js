import React from 'react';

import PlayersBarContainer from '../containers/PlayersBarContainer';
import ActionBoxContainer from '../containers/ActionBoxContainer';
import CounteractionBoxContainer from '../containers/CounteractionBoxContainer';
import MyCardsContainer from '../containers/MyCardsContainer';
import CourtDeckContainer from '../containers/CourtDeckContainer';

const App = () => {
  return (
    <div id="main" className="container-fluid">
      <PlayersBarContainer />
      <MyCardsContainer />
    </div>
  );
};

export default App;

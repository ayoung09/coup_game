import React from 'react';

import PlayersBarContainer from '../containers/PlayersBarContainer';
import ActionBoxContainer from '../containers/ActionBoxContainer';
import MyCardsContainer from '../containers/MyCardsContainer';
import CourtDeckContainer from '../containers/CourtDeckContainer';

const App = () => {
  return (
    <div id="main" className="container-fluid">
      <PlayersBarContainer />

        <div className="row">
        <div className="col-lg-12">



        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">

          <CourtDeckContainer />
          <ActionBoxContainer />
          <MyCardsContainer />

        </div>
      </div>

    </div>
  );
};

export default App;

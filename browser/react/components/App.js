import React from 'react';

import PlayersBarContainer from '../containers/PlayersBarContainer';
import ActionBoxContainer from '../containers/ActionBoxContainer';
import CounteractionBoxContainer from '../containers/CounteractionBoxContainer';

const App = () => {
  return (
    <div id="main" className="container-fluid">
      <PlayersBarContainer />
    </div>
  );
};

export default App;

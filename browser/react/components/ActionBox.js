import React from 'react';
import path from 'path';


const ActionBox = (props) => {

  let actionTaken = Object.keys(props.currentAction).length ? true : false;

  return (
    <div>
      <div className="btn-group-lg" role="group" aria-label="...">
        <h4>Actions</h4>
        {props.actions.map(action => {
          return (
            <button
              key={action.id}
              type="button"
              className="btn btn-default">{action.action}</button>
          );
        })}
      </div>
      <hr />
      <button
        type="button"
        className="btn btn-lg btn-danger"
        disabled={!actionTaken}>
        <h4>Block</h4>
      </button>
      <button
        type="button"
        className="btn btn-lg btn-info"
        onClick={props.toggleInfo}>
        <h4>Actions Info</h4>
      </button>
      <div>
        { props.infoVisible &&
          <img className="text-center" src={path.join(__dirname, 'actions-card.png')} /> }
      </div>
    </div>
  );
};

export default ActionBox;

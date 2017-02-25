import { TOGGLE_INFO } from '../constants';

const initialActionBoxState = {
  currentAction: {},
  infoVisible: false,
};

const actionBoxReducer = (state = initialActionBoxState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case TOGGLE_INFO:
      newState.infoVisible = !newState.infoVisible;
      break;

    default:
      return state;
  }
  return newState;
};

export default actionBoxReducer;

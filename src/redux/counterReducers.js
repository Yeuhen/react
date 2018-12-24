import types from './actionTypes'

const initialState = 0;

const counterReducers = (state = initialState, action) => {
  console.log('From inside reducer: ', action);

  switch (action.type) {
    case types.INCREMENT:
      return state + action.payload;

    case types.DECREMENT:
      return state - action.payload;

    case types.RESET:
      return initialState;

    default:
      return state;
  }
};

export default counterReducers;
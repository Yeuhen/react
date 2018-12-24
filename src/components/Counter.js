import React from 'react';
import { connect } from 'react-redux';
import {increment, decrement, reset} from '../redux/counterActions';

const Counter = ({value, increment, decrement, reset, step}) => (
  <div style ={{textAlign: 'center', padding: 16}}>
    <h1>{value}</h1>
    <br />
    <button onClick={() => increment(step)}>Increment</button>
    <button onClick={() => decrement(step)}>Decrement</button>
    <button onClick={reset}>Reset</button>
  </div>
);

const mSTP = (state, ownProps) =>
  console.log(ownProps) || {
  value: state.counterValue,
  step: state.step
};

// const mDTP = dispatch => ({
//   increment: (value) => dispatch(counterActions.increment(value)),
//   decrement: (value) => dispatch(counterActions.decrement(value)),
//   reset: () => dispatch(counterActions.reset())
// }); аналогично ниже

const mDTP = {increment, decrement, reset};


export default connect(mSTP, mDTP)(Counter);


import React from 'react';
import { connect} from 'react-redux';
import {changeStep} from '../redux/counterActions';

const StepSelector =({value, changeStep}) => (
  <div>
    <h2>Step choose: {value}</h2>
    <select value={value} onChange={e => changeStep(Number(e.target.value))}>
      <option value='5'>5</option>
      <option value='10'>10</option>
      <option value='30'>30</option>
    </select>
  </div>
);

const mSTP = state => ({
  value: state.step
});

const mDTP = { changeStep };

export default connect(mSTP, mDTP)(StepSelector);
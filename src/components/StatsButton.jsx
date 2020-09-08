import React from 'react';
import { generateAttribute, generateRace, generateClass } from '../services';

function StatsButton(props) {
  const { stat, setCharacterStats } = props;
  console.log(props);

  return <button>{props.name}</button>
}

export default StatsButton;
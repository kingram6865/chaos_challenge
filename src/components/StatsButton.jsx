import React from 'react';

function StatsButton(props) {
  const { stat, setCharacterStats } = props;
  console.log(props);

  return <button>{props.name}</button>
}

export default StatsButton;
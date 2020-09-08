import React from 'react';

function StatsButton(props) {
  console.log(props);

  return <button>{props.name}</button>
}

export default StatsButton;
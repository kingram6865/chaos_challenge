import React from 'react';
import { generateAttribute, generateRace, generateClass } from '../services';

function StatsButton(props) {
  const { stat, setCharacterStats, characterStats } = props;
  // console.log(props);

  function generateStat(){
    if (stat==='characterClass'){
      setCharacterStats({ ...characterStats, chracterRace: generateClass() });
    } else if (stat==='characterRace'){
      setCharacterStats({ ...characterStats, chracterRace: generateRace() });
    } else {
      setCharacterStats({ ...characterStats, [stat]: generateAttribute() });
    }
  }

  return <button onClick={()=> generateStat()}>{props.name}</button>
}

export default StatsButton;
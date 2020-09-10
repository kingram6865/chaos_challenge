import React from 'react';
import { generateAttribute, generateRace, generateClass } from '../services';
import './StatsButton.css';

/**
 * Button component to simulate Die rolls: 3D6 for Attributes, 
 * 1D8 for Race and 1D12 for Class.
 * Generator functions declared and coded in src/services/index.js
 * 
 * @param {*} props 
 */
function StatsButton(props) {
  const { stat, setCharacterStats, characterStats } = props;

  function generateStat(){
    if (stat==='characterClass'){
      setCharacterStats({ ...characterStats, 'characterClass': generateClass() });
    } else if (stat==='characterRace'){
      setCharacterStats({ ...characterStats, 'characterRace': generateRace() });
    } else {
      setCharacterStats({ ...characterStats, [stat]: generateAttribute() });
    }
  }

  return (
    <button 
      onClick={()=> generateStat()}
    >{props.name}</button>
  )
}

export default StatsButton;
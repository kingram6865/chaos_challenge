import React from 'react';
import { generateAttribute, generateRace, generateClass } from '../services/index';

/**
 * Generate a complete character randomly.
 * 
 * 
 * @param {*} props 
 * 
 */

function GeneratorButton(props) {
  let { characterStats, setCharacterStats } = props;

  function createCharacterStats(){
    setCharacterStats({...characterStats, 
      'strength': generateAttribute(),
      'dexterity': generateAttribute(),
      'constitution': generateAttribute(),
      'intelligence': generateAttribute(),
      'wisdom': generateAttribute(),
      'charisma': generateAttribute(),
      'characterClass': generateClass(),
      'characterRace': generateRace()
    });
    
  }
  // console.log(characterStats);

  return (

    <div>
      <button onClick={() => createCharacterStats()}>Generate All Stats</button>
    </div>

  )
}

export default GeneratorButton;
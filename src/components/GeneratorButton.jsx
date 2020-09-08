import React from 'react';
import { generateAttribute, generateRace, generateClass } from '../services';

/**
 * Generate a complete character randomly.
 * 
 * 
 * @param {*} props 
 * 
 */

function GeneratorButton(props) {
  let { characterStats, setCharacterStats } = props;
  const keys = Object.keys(characterStats); 
  console.log(props);

  function createCharacterStats(){
    let index = keys.length - 2;
    let newCharStats = {...characterStats};
    for (let i=0; i < index; i++){
      if ((keys[i] !== 'characterName') || (keys[i] !== 'playerName')){
        setCharacterStats({...newCharStats, [keys[i]]: generateAttribute()});
      }
    }

    setCharacterStats({...newCharStats, 'characterClass': generateClass()});
    setCharacterStats({...newCharStats, 'characterRace': generateRace()});

    // setCharacterStats(characterStats);
    console.log(characterStats);
  }


  // console.log(props);
  // console.log(`[GeneratorButton]  ${generateAttribute()}`);
  // console.log(`[GeneratorButton]  ${generateRace()}`);
  // console.log(`[GeneratorButton]  ${generateClass()}`);


  return (
    <div>
      <button onClick={() => createCharacterStats()}>Generate Character</button>
    </div>
  )
}

export default GeneratorButton;
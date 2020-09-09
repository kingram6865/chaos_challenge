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
  const keys = Object.keys(characterStats); 
  // console.log(props);

  function createCharacterStats(){
    let index = keys.length - 2;
    // let newCharStats = { ...characterStats };
    console.log(keys);
    // console.log(newCharStats);
    // for (let i=0; i < index; i++){
      
      // if ((keys[i] !== 'characterName') || (keys[i] !== 'playerName')){
      //   // console.log(generateAttribute());
      //   console.log(keys[i]);
      //   setCharacterStats({...characterStats, [keys[i]]: generateAttribute()});
      //   // console.log(`${JSON.stringify(newCharStats)}`);
      // }
    // }
    
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


    // setCharacterStats({...characterStats, 'characterClass': generateClass()});
    // setCharacterStats({...characterStats, 'characterRace': generateRace()});
    
    
  }
  console.log(characterStats);

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
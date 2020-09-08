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
  console.log(props);

  function createCharacterStats(){

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
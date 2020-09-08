import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import StatsButton from './StatsButton'
import GeneratorButton from './GeneratorButton';
import SaveButton from './SaveButton';

/**
 *  CSS-in-JS
 * 
 */

const InputStyle = styled.div`
  display: flex;
  flex-flow: column nowrap;

`
const Buttons = styled.div`
  display: flex;
  flex-flow: rows nowrap;
  align-self: center;
`
/**
 * React function
 * 
 */


function CharacterInputForm() {
  const [saveState, setSaveState] = useState('disabled');
  const [characterStats, setCharacterStats] = useState({
    playerName: '',
    characterName: '',
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
    characterClass: 0,
    characterRace: 0
  });
  const [characterClass, setCharacterClass] = useState(0);
  const [characterRace, setCharacterRace] = useState(0);

  function handleData(info, target){
    setSaveState((saveState === 'disabled') ? setSaveState('') : saveState);
    // console.log(target, info, newState);
    setCharacterStats({...characterStats, [target]: info});
  }

  useEffect(() =>{
    // alert("Rendering");
  }, []);
 

  return (
    <div className="data-input">
      <h3>Input Character Data here</h3>
      <InputStyle>
        <span>
          <label htmlFor="playerName">Player Name: </label>
          <input name="playerName" type="text" placeholder="Player Name" onChange={(e)=>{handleData(e.target.value,e.target.name)}} /></span><br />
        <span>
          <label htmlFor="characterName">Character Name: </label>
          <input name="characterName" type="text" placeholder="Character Name" onChange={(e)=>{handleData(e.target.value,e.target.name)}} /> </span><br />
        <span>
          <label htmlFor="strength">Strength: </label>
          <input name="strength" type="number" defaultValue={characterStats.strength} onChange={(e)=>{handleData(e.target.value,e.target.name)}} />
          <StatsButton name="Roll Str" stat="strength" setCharacterStats={setCharacterStats} characterStats={characterStats} /> </span><br />
        <span>
          <label htmlFor="dexterity">Dexterity: </label>
          <input name="dexterity" type="number" defaultValue={characterStats.dexterity} onChange={(e)=>{handleData(e.target.value,e.target.name)}} />
          <StatsButton name="Roll Dex" stat="dexterity" characterStats={characterStats} setCharacterStats={setCharacterStats}/> </span><br />
        <span>
          <label htmlFor="constitution">Constitution: </label>
          <input name="constitution" type="number" defaultValue={characterStats.constitution} onChange={(e)=>{handleData(e.target.value,e.target.name)}} />
          <StatsButton name="Roll Con" stat="constitution" characterStats={characterStats} setCharacterStats={setCharacterStats}/> </span><br />
        <span>
          <label htmlFor="intelligence">Intelligence: </label>
          <input name="intelligence" type="number" defaultValue={characterStats.intelligence} onChange={(e)=>{handleData(e.target.value,e.target.name)}} />
          <StatsButton name="Roll Int" stat="intelligence" characterStats={characterStats} setCharacterStats={setCharacterStats}/> </span><br />
        <span>
          <label htmlFor="wisdom">Wisdom: </label>
          <input name="wisdom" type="number" defaultValue={characterStats.wisdom} onChange={(e)=>{handleData(e.target.value,e.target.name)}} />
          <StatsButton name="Roll Wis" stat="wisdom" characterStats={characterStats} setCharacterStats={setCharacterStats}/> </span><br />
        <span>
          <label htmlFor="charisma">Charisma: </label>
          <input name="charisma" type="number" defaultValue={characterStats.charisma} onChange={(e)=>{handleData(e.target.value,e.target.name)}} />
          <StatsButton name="Roll Cha" stat="charisma" characterStats={characterStats} setCharacterStats={setCharacterStats}/> 
        </span><br />
        <span>
          <label htmlFor="characterRace">Race: </label>
          <input name="characterRace" type="number" placeholder="Race" defaultValue={characterRace} onChange={(e)=>{handleData(e.target.value,e.target.name)}} />
          <StatsButton name="Roll Race" stat="characterRace" setCharacterRace={setCharacterRace}/>
        </span><br />
        <span>
          <label htmlFor="class">Class: </label>
          <input name="characterClass" type="number" placeholder="Class" defaultValue={characterClass} onChange={(e)=>{handleData(e.target.value,e.target.name)}} />
          <StatsButton name="Roll Class" stat="characterClass" setCharacterClass={setCharacterClass}/>
        </span><br />
        <Buttons>
          <GeneratorButton setCharacterStats={setCharacterStats} characterStats={characterStats} />  
          <SaveButton status={saveState} data={{...characterStats, class: characterClass, race: characterRace}}/>
        </Buttons>
      </InputStyle>
    </div>
  )
}

export default CharacterInputForm;
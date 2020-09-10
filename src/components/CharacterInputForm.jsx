import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import StatsButton from './StatsButton'
import GeneratorButton from './GeneratorButton';
import SaveButton from './SaveButton';

import './CharacterInputForm.css';

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

function CharacterInputForm(props) {
  const { classData, raceData } = props;
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

  function handleData(info, target){
    setSaveState((saveState === 'disabled') ? setSaveState('') : saveState);
    setCharacterStats({...characterStats, [target]: info});
  }

  useEffect(() =>{
    // console.log(characterStats);
    // alert("Rendering");
  }, [characterStats]);

  return (
    <div className="data-input">
      <div className="data-instructions">
        <p>To save stats, enter a character name and a player name, then</p>
        <ol>
          <li>enter each stat manually OR</li> 
          <li>randomly select individual stats OR</li>
          <li>generate all stats at once.</li>
        </ol>
      </div>
      <InputStyle>
        <div className="data-id">
          <span>
            <label htmlFor="playerName">Player Name: </label>
            <input name="playerName" type="text" placeholder="Player Name" onChange={(e)=>{handleData(e.target.value,e.target.name)}} />
            </span><br />
          <span>
            <label htmlFor="characterName">Character Name: </label>
            <input name="characterName" type="text" placeholder="Character Name" onChange={(e)=>{handleData(e.target.value,e.target.name)}} /> 
            </span><br />
        </div>
        <div className="attributes">
          <div className="data-physical">
            <span>
              <label htmlFor="strength">Strength: </label>
              <input name="strength" type="number" value={characterStats.strength} onChange={(e)=>{handleData(e.target.value,e.target.name)}} />
              <StatsButton name="Roll Str" stat="strength" setCharacterStats={setCharacterStats} characterStats={characterStats} /> 
              </span><br />
            <span>
              <label htmlFor="dexterity">Dexterity: </label>
              <input name="dexterity" type="number" value={characterStats.dexterity} onChange={(e)=>{handleData(e.target.value,e.target.name)}} />
              <StatsButton name="Roll Dex" stat="dexterity" characterStats={characterStats} setCharacterStats={setCharacterStats}/> 
              </span><br />
            <span>
              <label htmlFor="constitution">Constitution: </label>
              <input name="constitution" type="number" value={characterStats.constitution} onChange={(e)=>{handleData(e.target.value,e.target.name)}} />
              <StatsButton name="Roll Con" stat="constitution" characterStats={characterStats} setCharacterStats={setCharacterStats}/> 
              </span><br />
          </div>
          <div className="data-mental">
            <span>
              <label htmlFor="intelligence">Intelligence: </label>
              <input name="intelligence" type="number" value={characterStats.intelligence} onChange={(e)=>{handleData(e.target.value,e.target.name)}} />
              <StatsButton name="Roll Int" stat="intelligence" characterStats={characterStats} setCharacterStats={setCharacterStats}/> 
              </span><br />
            <span>
              <label htmlFor="wisdom">Wisdom: </label>
              <input name="wisdom" type="number" value={characterStats.wisdom} onChange={(e)=>{handleData(e.target.value,e.target.name)}} />
              <StatsButton name="Roll Wis" stat="wisdom" characterStats={characterStats} setCharacterStats={setCharacterStats}/> 
              </span><br />
            <span>
              <label htmlFor="charisma">Charisma: </label>
              <input name="charisma" type="number" value={characterStats.charisma} onChange={(e)=>{handleData(e.target.value,e.target.name)}} />
              <StatsButton name="Roll Cha" stat="charisma" characterStats={characterStats} setCharacterStats={setCharacterStats}/> 
            </span><br />
          </div>
        </div>
        <div className="data-intrinsic">
          <span>
            <label htmlFor="characterRace">Race: </label>
            <input name="characterRace" type="number" placeholder="Race" value={characterStats.characterRace} onChange={(e)=>{handleData(e.target.value,e.target.name)}} />
            <StatsButton name="Roll Race" stat="characterRace" characterStats={characterStats} setCharacterStats={setCharacterStats}/>
          </span><br />
          <span>
            <label htmlFor="class">Class: </label>
            <input name="characterClass" type="number" placeholder="Class" value={characterStats.characterClass} onChange={(e)=>{handleData(e.target.value,e.target.name)}} />
            <StatsButton name="Roll Class" stat="characterClass" characterStats={characterStats} setCharacterStats={setCharacterStats}/>
          </span><br />
        </div>
        <Buttons>
          <GeneratorButton setCharacterStats={setCharacterStats} characterStats={characterStats} />  
          <SaveButton status={saveState} data={characterStats} 
            classData={classData}
            raceData={raceData}          
          />
        </Buttons>
      </InputStyle>
    </div>
  )
}

export default CharacterInputForm;
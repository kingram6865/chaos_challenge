import React from 'react';
import StatsButton from './StatsButton'

function CharacterInputForm() {

  return (
    <form>
      <h3>Input Character Data here</h3>
      <span><label htmlFor="playerName">Player Name: </label><input name="playerName" type="text" placeholder="Player Name"/></span><br />
      <span><label htmlFor="playerName">Character Name: </label><input name="characterName" type="text" placeholder="Character Name"/> </span><br />
      <span><label htmlFor="playerName">Strength: </label><input name="strength" type="number" /><StatsButton name="Roll Str" /> </span><br />
      <span><label htmlFor="playerName">Dexterity: </label><input name="dexterity" type="number" /><StatsButton name="Roll Dex" /> </span><br />
      <span><label htmlFor="playerName">Constiturion: </label><input name="constitution" type="number" /><StatsButton name="Roll Con" /> </span><br />
      <span><label htmlFor="playerName">Intelligence: </label><input name="intelligence" type="number" /><StatsButton name="Roll Int" /> </span><br />
      <span><label htmlFor="playerName">Wisdom: </label><input name="wisdom" type="number" /><StatsButton name="Roll Wis" /> </span><br />
      <span><label htmlFor="playerName">Charisma: </label><input name="charisma" type="number" /><StatsButton name="Roll Cha" /> </span><br />
      <span><label htmlFor="playerName">Race: </label><input name="race" type="number" placeholder="Race"/><StatsButton name="Roll Race" /> </span><br />
      <span><label htmlFor="playerName">Class: </label><input name="class" type="number" placeholder="Class"/><StatsButton name="Roll Class" /> </span><br />
      <span>Generator Button | Save Button</span>
    </form>
  )
}

export default CharacterInputForm;
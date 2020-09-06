import React from 'react';

function CharacterList() {

  

  // const characters = props.characters;
  const characters = [
    {
      playerName: "TestName"
    },
    {
      playerName: "TestName2"
    },
  ]

  return (
    <div>
      <h3>Characters Created</h3>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>{character.playerName}</li>
        ))}
      </ul>
  </div>    
  )
}

export default CharacterList;
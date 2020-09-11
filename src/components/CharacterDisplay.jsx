import React, { useState } from 'react';
import SavedCharacterData from './SavedCharacterData';
import './CharacterDisplay.css';

/* Show details about a specifc character when selected from CharacterList */

function CharacterDisplay(props) {
  const { selectedCharacter } = props;
  const [charData, setCharData] = useState({});

  return (
    <div>
      <div className="component-title">Character Info</div>
      {selectedCharacter && <SavedCharacterData data={selectedCharacter} charData={charData} setCharData={setCharData} />}
    </div>
  )
}

export default CharacterDisplay;
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import SavedCharacterData from './SavedCharacterData';

/* Show details about a character when selected from CharacterList */ 

function CharacterDisplay(props) {
  const [charData, setCharData] = useState();
  // const url = {process.env.REACT_APP_BASE_URL};

  function retrieveCharacters(){
    // const url = `${process.env.REACT_APP_BASE_URL}`;
    const url = "*** test ***";
    setCharData(url);
  }
  
  useEffect(() => {
    retrieveCharacters();
  }, []);

  return (
    <div>
      <h3>Character Info</h3>
      <SavedCharacterData data={charData}/>
    </div>
  )
}

export default CharacterDisplay;
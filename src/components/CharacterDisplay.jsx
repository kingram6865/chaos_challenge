import React, { useState, useEffect } from 'react';
// import React, { useState } from 'react';
import axios from 'axios';
import SavedCharacterData from './SavedCharacterData';

/* Show details about a specifc character when selected from CharacterList */ 

function CharacterDisplay(props) {
  const { selectedCharacter } = props;
  const [charData, setCharData] = useState({});

  // console.log(`[CharacterDisplay] ${JSON.stringify(selectedCharacter)}`);

  async function retrieveCharacter(){
    // const url = `${process.env.REACT_APP_AIRTABLE_BASE}/${input.id}`;
    const url = `${process.env.REACT_APP_AIRTABLE_BASE}`;
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    });
    // console.log(`[CharacterDisplay] ${JSON.stringify(response.data)}`);
    setCharData(response.data.records);
  }

  useEffect(() => {
    setCharData(selectedCharacter);
  }, []);  

  useEffect(() => {
    retrieveCharacter();
  }, []);

  return (
    <div>
      <h3>Character Info</h3>
      selectedCharacter && <SavedCharacterData data={selectedCharacter}/>
    </div>
  )
}

export default CharacterDisplay;
import React, { useState, useEffect } from 'react';
// import React, { useState } from 'react';
import axios from 'axios';
import SavedCharacterData from './SavedCharacterData';

/* Show details about a specifc character when selected from CharacterList */ 

function CharacterDisplay(props) {
  const { selectedCharacter } = props;
  const [charData, setCharData] = useState({});
  // console.log(charData);

  async function retrieveCharacter(){
    // const url = `${process.env.REACT_APP_AIRTABLE_BASE}/${input.id}`;
    // const urlCheck = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/characters`;
    // console.log(urlCheck);
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/characters`;
    console.log(`[retrieveCharacter] ${url}`);
    // const url = `${process.env.REACT_APP_AIRTABLE_BASE}`;
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      },
    });

    setCharData(response.data.records);
  }

  useEffect(() => {
    setCharData(selectedCharacter);
  }, [selectedCharacter]);  

  useEffect(() => {
    retrieveCharacter();
  }, []);

  return (
    <div>
      <h3>Character Info</h3>
      selectedCharacter && <SavedCharacterData data={selectedCharacter} charData={charData} setCharData={setCharData} />
    </div>
  )
}

export default CharacterDisplay;
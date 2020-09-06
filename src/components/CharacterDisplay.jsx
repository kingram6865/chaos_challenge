import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SavedCharacterData from './SavedCharacterData';

/* Show details about a character when selected from CharacterList */ 

function CharacterDisplay(props) {
  const [charData, setCharData] = useState([]);

  async function retrieveCharacters(){
    const url = `${process.env.REACT_APP_AIRTABLE_BASE}`;
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    });
    // console.log(response.data.records);
    setCharData(response.data.records);
    // setCharData([`${process.env.REACT_APP_AIRTABLE_KEY}, ${process.env.REACT_APP_AIRTABLE_BASE}`]);
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
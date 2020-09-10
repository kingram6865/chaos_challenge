// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
// import axios from 'axios';
import SavedCharacterData from './SavedCharacterData';
// import { baseURL } from '../services/';

/* Show details about a specifc character when selected from CharacterList */ 

function CharacterDisplay(props) {
  const { selectedCharacter } = props;
  const [charData, setCharData] = useState({});
  // console.log(charData);

  // async function retrieveCharacter(){
  //   const properURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/characters`;
  //   // const url = `${baseURL}/characters`;
  //   const url = `${process.env.REACT_APP_AIRTABLE_BASE}`;
  //   console.log(`[retrieveCharacter] ${url}`);
  //   console.log(`[retrieveCharacter] ${properURL}`);

  //   const response = await axios.get(url, {
  //     headers: {
  //       'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  //     },
  //   });

  //   setCharData(response.data.records);
  // }

  // useEffect(() => {
  //   setCharData(selectedCharacter);
  // }, [selectedCharacter]);  

  // useEffect(() => {
  //   retrieveCharacter();
  // }, []);

  return (
    <div>
      <h3>Character Info</h3>
      {selectedCharacter && <SavedCharacterData data={selectedCharacter} charData={charData} setCharData={setCharData} />}
    </div>
  )
}

export default CharacterDisplay;
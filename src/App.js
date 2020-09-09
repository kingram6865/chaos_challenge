import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import Test from './components/Test';
import CharacterList from './components/CharacterList';
import CharacterDisplay from './components/CharacterDisplay';
import CharacterInputForm from './components/CharacterInputForm';

import './App.css';

function App() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState('');
  // console.log("[ENV CHECK: REACT_APP_AIRTABLE_BASE]: ", process.env.REACT_APP_AIRTABLE_BASE);
  // console.log("[ENV CHECK: REACT_APP_BASE_URL]: ", process.env.REACT_APP_BASE_URL);

  async function retrieveAllCharacters(){
    // const url = `${process.env.REACT_APP_AIRTABLE_BASE}`;
    // console.log("[ENV CHECK: REACT_APP_AIRTABLE_BASE]: ", process.env.REACT_APP_AIRTABLE_BASE);
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/characters`;

    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    });    

    setAllCharacters(response.data.records);
  }

  useEffect(() => {
    retrieveAllCharacters();
  }, []);

  // console.log(allCharacters[0]);

  return (
    <div className="App">
      {/* <Test data={allCharacters[0]} /> */}
      <h1>D&amp;D Chaos Challenge Character Generator</h1>
      <CharacterInputForm />
      <CharacterList data={allCharacters} setSelectedCharacter={setSelectedCharacter} selectedCharacter={selectedCharacter}/>
      {/* <CharacterDisplay selectedCharacter={selectedCharacter}/> */}
      <CharacterDisplay selectedCharacter={allCharacters[0]}/>
    </div>
  );
}

export default App;

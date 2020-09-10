import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Test from './components/Test';
import CharacterList from './components/CharacterList';
import CharacterDisplay from './components/CharacterDisplay';
import CharacterInputForm from './components/CharacterInputForm';

import './App.css';

function App() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [classData, setClassData] = useState([]);
  const [raceData, setRaceData] = useState([]);

  async function retrieveAllCharacters(){
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/characters`;

    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    });    

    setAllCharacters(response.data.records);
  }

  async function classesID(){
    const url = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_AIRTABLE_BASE + "/classes";
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    });

    const finalData = response.data.records.map((item) => ({'id': item.id, "roll": item.fields.roll_value, "className": item.fields.class_result}))
    setClassData(finalData);
  }

  async function racesID(){
    const url = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_AIRTABLE_BASE + "/races";
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    });

    const finalData = response.data.records.map((item) => ({'id': item.id, "roll": item.fields.roll_value, "raceName": item.fields.race_result}))
    setRaceData(finalData);
  }




  useEffect(() => {
    retrieveAllCharacters();
    classesID();
    racesID();
  }, []);

  // console.log(allCharacters[0]);

  return (
    <div className="App">
      {/* <Test data={allCharacters[0]} /> */}
      <h1>D&amp;D Chaos Challenge Character Generator</h1>
      <CharacterInputForm  
        classData={classData}
        raceData={raceData}
      />
      <CharacterList data={allCharacters} setSelectedCharacter={setSelectedCharacter} selectedCharacter={selectedCharacter}/>
      {/* <CharacterDisplay selectedCharacter={selectedCharacter}/> */}
      <CharacterDisplay selectedCharacter={allCharacters[0]}/>
      <Test />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

import CharacterList from './components/CharacterList';
import CharacterDisplay from './components/CharacterDisplay';
import CharacterInputForm from './components/CharacterInputForm';

import './App.css';

function App() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [classData, setClassData] = useState([]);
  const [raceData, setRaceData] = useState([]);


  /**
   * Get all the current characters in the database and 
   * add them to state in allCharacters.
   */
  async function retrieveAllCharacters(){
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/characters`;

    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    });    

    setAllCharacters(response.data.records);
  }

  /**
   * Logic:
   * The the class and race fields in the characters table are linked
   * to lookup tables to translate the roll number to a string name.
   * 
   * Airtable does not do this as a direct relationship as I am used to
   * with database lookups. Airtable creates it's own id for the lookup
   * record and adds that as an array value to the field in the table 
   * accessing the lookup.
   * 
   * In order to properly handle a nnew recoord and input the correct
   * lookup relationship, the contents of each lookup table needs to be
   * retrieved and held to retrieve the id and make the proper roll/record
   * translation.
   * 
   * classesID(), racesID() is the lookup translation data for the class 
   * and race fields in characters.
   */
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

  /**
   * When component mounts get the current list of characters and 
   * retrieve the class and race field lookup data.
   * 
   */
  useEffect(() => {
    retrieveAllCharacters();
    classesID();
    racesID();
  }, []);

  /**
   * <CharacterInputForm /> handles character creation logic
   * <CharacterList /> handles presentation of already created characters
   * <CharacterDisplay /> handles presentation of a character selected from <CharacterList />
   */
  return (
    <div className="App">
      <div className="app-title">D&amp;D Chaos Challenge Character Generator</div>
      <nav>
      <Link to="/">Create a Character</Link>
        <Link to="/display">Saved Characters</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <CharacterInputForm  
            classData={classData}
            raceData={raceData}
          />
        </Route>
        <Route path="/display">
          <CharacterList data={allCharacters} setSelectedCharacter={setSelectedCharacter} selectedCharacter={selectedCharacter}/>
          {/* <CharacterDisplay selectedCharacter={selectedCharacter}/> */}
          <CharacterDisplay selectedCharacter={allCharacters[0]}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
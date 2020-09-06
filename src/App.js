import React from 'react';

import CharacterList from './components/CharacterList';
import CharacterDisplay from './components/CharacterDisplay';
import CharacterInputForm from './components/CharacterInputForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>D&amp;D Chaos Challenge Character Generator</h1>
      <CharacterInputForm />
      <CharacterList />
      <CharacterDisplay />
    </div>
  );
}

export default App;

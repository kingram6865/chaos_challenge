import React from 'react';
import axios from 'axios';
/**
 * Take character info from props.data and store in airtable 'characters' table
 * 
 * @param {} props 
 * 
 * 
 */

function SaveButton(props) {
  const { status, data } = props;
  
  async function saveRecord(){
    axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_AIRTABLE_KEY;
    const url = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_AIRTABLE_BASE + "/characters";
    // console.log(url);

    await axios.post(url, 
      {
        "records": [
          {
            "fields": {
                playerName: data.playerName,
                characterName: data.characterName,
                strength: data.strength,
                dexterity: data.dexterity,
                intelligence: data.intelligence,
                constitution: data.constitution,
                wisdom: data.wisdom,
                charisma: data.charisma,
                characterClass: data.characterClass,
                characterRace: data.characterRace
            }
          }
        ]
      },
      {
       Headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
       } 
      }      
    );

  }


  return (
    <div>
    {
      (status === 'disabled') 
      ? <button disabled>Save Character</button>
      : <button 
          onClick={
            () => saveRecord()
          }
        >Save Character</button>
    }
    </div>
  )
}

export default SaveButton;
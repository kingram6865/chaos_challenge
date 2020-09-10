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
  const { status, data, classData, raceData } = props;

  function classID(id){
    const info = classData.find(obj => {
      return obj.roll === id
    });
    return info;
  }
  
  function raceID(id){
    const info = raceData.find(obj => {
      return obj.roll === id
    });
    return info;
  }


  async function saveRecord(e){
    // axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_AIRTABLE_KEY;
    const url = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_AIRTABLE_BASE + "/characters";
    // console.log("[SaveButton]: ",url)
    // console.log(classData.find((roll, index, arr) => {Object.keys(arr[index])  }));
    // console.log(classData.find((item, index) =>  console.log(index, item.roll)  ));

    // console.log(classID(data.characterClass).id);
    // console.log(raceID(data.characterRace).id);

    const fields = {
      playerName: data.playerName,
      characterName: data.characterName,
      strength: data.strength,
      dexterity: data.dexterity,
      intelligence: data.intelligence,
      constitution: data.constitution,
      wisdom: data.wisdom,
      charisma: data.charisma,
      class: [
        classID(data.characterClass).id
        ],
      race: [
        raceID(data.characterRace).id
        ]
    }
    // characterClass: data.characterClass,
    // characterRace: data.characterRace
    console.log(fields);
    await axios.post(url, { fields },
      {
       headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': 'application/json'
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
            (e) => saveRecord(e)
          }
        >Save Character</button>
    }
    </div>
  )
}

export default SaveButton;
import React from 'react';
import './SavedCharacterData.css';

/** 
 * Use axios to retrieve the saved data for a selected character
 * and display it within this component.
*/
function SavedCharacterData(props) {
  const data = props.data;
  // console.log(data);
  return (
    <div className="saved-character-info">
    { (!Object.is(data, undefined))  && 
     <div>
      <div><span className="info-label">Player Name:</span> <span className="attrib-value">{data.fields.playerName}</span></div> 
      <div><span className="info-label">Character:</span> <span className="attrib-value">{data.fields.characterName}</span></div>
      <div><span>{data.fields.raceName}</span>, <span>{data.fields.className}</span></div>
      <div>
        <span className="info-label">Strength:</span> <span className="attrib-value">{data.fields.strength} </span>
        <span className="info-label">Dexterity:</span> <span className="attrib-value">{data.fields.dexterity} </span>
        <span className="info-label">Constitution:</span> <span className="attrib-value">{data.fields.constitution} </span>
        <span className="info-label">Intelligence:</span> <span className="attrib-value">{data.fields.intelligence} </span>
        <span className="info-label">Wisdom:</span> <span className="attrib-value">{data.fields.wisdom} </span>
        <span className="info-label">Charisma:</span> <span className="attrib-value">{data.fields.charisma} </span>
      </div>
      <div>Bio</div>
      <div>Image</div>
    </div>
    }
    </div>
  )
}

export default SavedCharacterData;
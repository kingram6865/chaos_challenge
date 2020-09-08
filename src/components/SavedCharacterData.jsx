import React, { useState, useEffect } from 'react';


/** 
 * Use axios to retrieve the saved data for a selected character
 * and display it within this component.
*/
function SavedCharacterData(props) {
  const data = props.data;
  // console.log(data);
  return (
    <div>
    { (!Object.is(data, undefined))  && 
     <div>
      <div>Name: {data.fields.characterName}</div>
      <div><span>Race: {data.fields.raceName}</span> <span>Class: {data.fields.className}</span></div>
      <div><span>Strength: {data.fields.strength} </span><span>Dexterity: {data.fields.dexterity} </span><span>Constitution: {data.fields.constitution} </span>
      <span>Intelligence: {data.fields.intelligence} </span><span>Wisdom: {data.fields.wisdom} </span>

      </div>
      <div>Bio</div>
      <div>Image</div>
    </div>
    }
    </div>
  )
}

export default SavedCharacterData;
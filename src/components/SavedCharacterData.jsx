import React from 'react';


/** 
 * Use axios to retrieve the saved data for a selected character
 * and display it within this component.
*/
function SavedCharacterData(props) {
  const data = props.data;
  // console.log(props.data);
  console.log(data);

  return (
    <div>
      {/**
        Want to create a scrolling table here of maybe a few rows at a time
        on the mobile presentation, but more on the tablet and desktop views
      
       */}
      <ul>
        {
          data.map((item, idx) => (
          <li key={idx}>{item.fields.playerName}</li>
          ))
        }
      </ul>
      {/* <div>Character Name</div>
      <div>Character Stats</div>
      <div>Character Bio</div>
      <div>Character Image</div> */}
    </div>
  )
}

export default SavedCharacterData;
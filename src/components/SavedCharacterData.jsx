/** 
 * Use axios to retrieve the saved data for a selected character
 * and display it with this component
*/

import React from 'react';

function SavedCharacterData(props) {

  return (
    <div>
      <div>{props.data}</div>
      <div>Character Name</div>
      <div>Character Stats</div>
      <div>Character Bio</div>
      <div>Character Image</div>
    </div>
  )
}

export default SavedCharacterData;
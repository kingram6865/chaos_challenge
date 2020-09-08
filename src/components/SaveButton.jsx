import React from 'react';

/**
 * Take character info from props and store in airtable 'characters' table
 * 
 * @param {} props 
 * 
 * 
 */

function SaveButton(props) {
  const { status, data } = props;
  console.log(data);


  return (
    <div>
    {
      (status === 'disabled') 
      ? <input type="submit" disabled value="Save Character" /> 
      : <input type="submit" value="Save Character" />  
    }
    </div>
  )
}

export default SaveButton;
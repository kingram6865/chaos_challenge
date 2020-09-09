import React from 'react';

/**
 * Take character info from props and store in airtable 'characters' table
 * 
 * @param {} props 
 * 
 * 
 */

function SaveButton(props) {
  const { status } = props;
  // console.log(data);
  

  return (
    <div>
    {
      (status === 'disabled') 
      ? <button disabled>Save Character</button>
      : <button >Save Character</button>
    }
    </div>
  )
}

export default SaveButton;
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
  

  return (
    <div>
    {
      (status === 'disabled') 
      ? <button disabled>Save Character</button>
      : <button 
          onClick={
            () => console.log(data)
          }
        >Save Character</button>
    }
    </div>
  )
}

export default SaveButton;
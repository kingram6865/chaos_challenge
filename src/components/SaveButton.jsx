import React from 'react';

function SaveButton(props) {
  const status = props.status;
  // const status = '';


  return (
    <div>
    {
      (props.status === 'disabled') 
      ? <input type="submit" disabled value="Save Character" /> 
      : <input type="submit" value="Save Character" />  
    }
    </div>
  )
}

export default SaveButton;
import React from 'react';

function Test (props){
  // console.log(props.data);


return (
  <div>
    {
     props.data  &&  props.data.id
    }
  </div>
  )
}

export default Test;
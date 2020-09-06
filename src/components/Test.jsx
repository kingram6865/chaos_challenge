import React from 'react';

function Test (){

return (
  <div>
    {process.env.REACT_APP_AIRTABLE_BASE}<br />
    {process.env.REACT_APP_AIRTABLE_KEY}
  </div>
  )
}

export default Test;
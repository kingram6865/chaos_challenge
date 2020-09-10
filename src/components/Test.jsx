import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Test (props){
  const [classData, setClassData] = useState([]);
  const [raceData, setRaceData] = useState([]);
  // console.log(props.data);

  async function classesID(){
    const url = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_AIRTABLE_BASE + "/classes";
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    });

    const finalData = response.data.records.map((item) => ({'id': item.id, "roll": item.fields.roll_value, "className": item.fields.class_result}))
    // console.log(finalData);
    setClassData(finalData);
    console.log(finalData);
  }

  async function racesID(){
    const url = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_AIRTABLE_BASE + "/races";
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    });

    const finalData = response.data.records.map((item) => ({'id': item.id, "roll": item.fields.roll_value, "raceName": item.fields.race_result}))
    // console.log(finalData);
    setRaceData(finalData);
    console.log(finalData);
  }


  
  useEffect(() => {
    classesID();
    racesID();
  }, []);


return (
  <div>
    {
    //  (classData) ? classData.records.id : null
    }
  </div>
  )
}

export default Test;
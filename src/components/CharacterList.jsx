import React, { useState, useEffect } from 'react';
// import React from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import './CharacterList.css';

const TableStyle = styled.div`
  overflow-y: scroll;
  overflow-x: scroll;
  display: inline-block;
  height: 200px;
`
const ClassSpan = styled.span`
  border-radius: 5px;
  color: white;
  font-weight: bold;
  padding: 0 2px;
`

const AttributeSpan = styled.span`
  border-radius: 5px;
`

function CharacterList(props) {
  const [charData, setCharData] = useState([]);
  // const charData = props.data;
  
  // async function retrieveCharacters(){
  //   const url = `${process.env.REACT_APP_AIRTABLE_BASE}`;
  //   const response = await axios.get(url, {
  //     headers: {
  //       'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  //     }
  //   });
  //   console.log(response.data.records);
  //   setCharData(response.data.records);
  // }
  
  useEffect(() => {
    // retrieveCharacters();
    setCharData(props.data);
  }, [props.data]);    

  return (
    <div className="base">
      <div className="component-title">Characters Created ({charData.length} total)</div>
      {/**
        Want to create a scrolling table here of maybe a few rows at a time
        on the mobile presentation, but more on the tablet and desktop views
      
       */}
      <div className="data-character-list">
      <TableStyle>
      <table>
        <tbody>
          <tr>
            <th>Player Name</th>
            <th>Character Name</th>
            <th>Stats</th>
            <th>Class</th>
            <th>Race</th>
          </tr>
        {
          charData.map((item, idx) => (
          <tr 
            onClick={(e)=>console.log(e)}
            data-id={item.id}  
            key={idx}>
              <td>{item.fields.playerName}</td>
              <td>{item.fields.characterName}</td>
              <td>
                {`{`}
                <AttributeSpan className="str">{`str: ${item.fields.strength}, `}</AttributeSpan> 
                <AttributeSpan className="dex">{`dex: ${item.fields.dexterity}, `}</AttributeSpan>
                <AttributeSpan className="con">{`con: ${item.fields.constitution}, `}</AttributeSpan>
                <AttributeSpan className="int">{`int: ${item.fields.intelligence}, `}</AttributeSpan>
                <AttributeSpan className="wis">{`wis: ${item.fields.wisdom}, `}</AttributeSpan>
                <AttributeSpan className="cha">{`cha: ${item.fields.charisma}, `}</AttributeSpan>
              </td>
              <td>
              <ClassSpan style={{backgroundColor: `#${item.fields.classColor}`}}>{`${item.fields.className}`}</ClassSpan>
              </td>
              <td>
              {`${item.fields.raceName}`}
              </td>
          </tr>
          ))
        }
        </tbody>
      </table>
      </TableStyle>
      </div>
      {/* <ul>
        {characters.map((character, index) => (
          <li key={index}>{character.playerName}</li>
        ))}
      </ul> */}


  </div>    
  )
}

export default CharacterList;
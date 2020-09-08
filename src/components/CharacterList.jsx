// import React, { useState, useEffect } from 'react';
import React from 'react';
// import axios from 'axios';
import styled from 'styled-components';

const TableStyle = styled.div`
  overflow-y: scroll;
  display: inline-block;
  height: 200px;
`
const ClassSpan = styled.span`
  border-radius: 5px;
`

const AttributeSpan = styled.span`
  border-radius: 5px;
`

function CharacterList(props) {
  // const [charData, setCharData] = useState([]);
  const charData = props.data;

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
  
  // useEffect(() => {
  //   retrieveCharacters();
  // }, []);    

  return (
    <div>
      <h3>Characters Created ({charData.length} total)</h3>
      {/**
        Want to create a scrolling table here of maybe a few rows at a time
        on the mobile presentation, but more on the tablet and desktop views
      
       */}
      <TableStyle>
      <table>
        <tbody>
        {
          charData.map((item, idx) => (
          <tr 
            data-id={item.id}  
            key={idx}>
              <td>{item.fields.playerName}</td>
              <td>{item.fields.characterName}</td>
              <td>
                {`{`}<AttributeSpan className="str">{`str: ${item.fields.strength},`}</AttributeSpan> 
                {`dex: ${item.fields.dexterity},`} 
                {`con: ${item.fields.constitution}, 
              int: ${item.fields.intelligence}, wis: ${item.fields.wisdom}, cha: ${item.fields.charisma}
                }, `}
                <ClassSpan style= {{backgroundColor: `#${item.fields.classColor}` }}>{`class: ${item.fields.className}, `}</ClassSpan>{`race: ${item.fields.raceName}}`}
              </td>
          </tr>
          ))
        }
        </tbody>
      </table>
      </TableStyle>
      {/* <ul>
        {characters.map((character, index) => (
          <li key={index}>{character.playerName}</li>
        ))}
      </ul> */}


  </div>    
  )
}

export default CharacterList;
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './CharacterList.css';

const TableStyle = styled.div`
  overflow-y: scroll;
  overflow-x: scroll;
  display: inline-block;
  height: 250px;
  width: 95%;
`
const ClassSpan = styled.span`
  border-radius: 5px;
  color: white;
  padding: 0 2px;
`
const AttributeSpan = styled.span`
  border-radius: 5px;
`
function CharacterList(props) {
  const [charData, setCharData] = useState([]);


  useEffect(() => {
    setCharData(props.data);
  }, [props.data]);    

  return (
    <div className="base">
      <div className="component-title">Characters Created ({charData.length} total)</div>
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
              <td className="stats">
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
  </div>    
  )
}

export default CharacterList;
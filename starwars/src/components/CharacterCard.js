import React from 'react'

const Cards =`
background-color : black`
;

function CharacterCard(props) {
    return (
      <Cards>
        <h2>{props.name}</h2>
        <p>Height: {props.height}</p>
        <p>Mass: {props.mass}</p>
        <p>Hair Color: {props.hair}</p>
        <p>Skin: {props.skin}</p>
        <p>Eye Color: {props.eyes}</p>
        <p>Year of birth: {props.birth}</p>
        <p>Gender: {props.gender}</p>
        
      </Cards>
    )
  }

export default CharacterCard
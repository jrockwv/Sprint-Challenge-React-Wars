import React from 'react'
import styled from 'styled-components'

const Cards = styled.div`
    background-color: grey;
    padding: 5px;
    width: 400px;
    color: salmon;
    text-align: center;
    margin: 10px;
    border: 5px solid black;
    border-radius: 15px;
    font-size: 1.5rem;
    h2 {
        text-align:center;
        letter-spacing: 2.5px;
        font-size: 2.6rem;
    }
`;

function CharacterCard(props) {
    return (
      <Cards>
        <h2>{props.name}</h2>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Hair Color: {props.hair}</p>
        <p>Eye Color: {props.eyes}</p>
        <p>Skin: {props.skin}</p>
        <p>Mass: {props.mass}</p>
        <p>Year of birth: {props.birth}</p>
        
      </Cards>
    )
  }

export default CharacterCard
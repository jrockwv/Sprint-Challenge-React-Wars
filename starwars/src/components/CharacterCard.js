import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios';

const Cards = styled.div`
    background-color: teal;
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

  useEffect(() => {
    axios.get(props.locationUrl)
    .then(response => {
     console.log(response) 
    })
  },
  [props.locationUrl]);
    return (
      <Cards>
        
        <h2>{props.name}</h2>        
        <img src={props.image}/>
        <p>Species: {props.species}</p>
        <p>Gender: {props.gender}</p>
        <p>Status: {props.status}</p>
        <p>Origin: {props.origin}</p>
        <p>Last Known Location: {props.location}</p>
        
      </Cards>
    )
  }

export default CharacterCard
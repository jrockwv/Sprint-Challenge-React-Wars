import React, {useState, useEffect} from  'react';
import axios from 'axios';
import CharacterCard from './CharacterCard'
import styled from 'styled-components'

const CharacterContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  `;



function CharactersList(){

    const [character, setCharacter] = useState([])
 
    useEffect ( () => {
        axios.get('https://swapi.co/api/people/')
        .then( response => {
            setCharacter(response.data.results)
        })
        .catch( error => console.log('broken it is.', error))
    },[])
    console.log(character)
    return (
        <div className='container'>
            <CharacterContainer>
                { character.map( (item, keyIndex) => {
                    return <CharacterCard
                    key={keyIndex}
                    name={item.name}
                    height={item.height}
                    mass={item.mass}
                    hair={item.hair_color}
                    skin={item.skin_color}
                    gender={item.gender}
                    home={item.home}
                    created={item.created}
                    edited={item.edited}
                    eyes={item.eye_color}
                    birth={item.birth_year}
                    />
                })
                }
            </CharacterContainer>

        </div>
    )
}

export default CharactersList
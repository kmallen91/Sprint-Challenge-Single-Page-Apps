import React, { useEffect, useState } from "react";
import axios from "axios"
import CharacterCard from "./CharacterCard"
// import {Link} from "react-router-dom"

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacter] = useState([]);


// const id = props.match.params.id
  useEffect(() => {
    const person = props.match.params.id;
    const getCharacters = () => {
    axios
    .get(`https://rickandmortyapi.com/api/character/${person}`)
    .then(response => {
      console.log(response.data.results.id);
      setCharacter(response.data.results);
    })
    .catch(err => {console.log("ERROR", err)})
    
    }
    getCharacters();
    console.log(person)
  }, [props.match.params.id]);
  // console.log(characters.length)
  

  return (
    <section className="character-list">
       
      {characters.map(character => (
        
        <CharacterCard key={character.id} {...character}/>
        
      ))}
    
    
     
    </section>
  );
}

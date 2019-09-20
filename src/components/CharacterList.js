import React, { useEffect, useState } from "react";
import axios from "axios"
import CharacterCard from "./CharacterCard"
// import {Link} from "react-router-dom"

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacter] = useState([]);



  useEffect(() => {
    const person = props.match.params.id;
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(response);
      var results = response.data.results;
      setCharacter(results);
    })
    .catch(err => {console.log("ERROR", err)})    
    
  
    
  }, [props.match.params.id]);
  // console.log(characters.length)
  console.log(characters)

  return (
    <section className="character-list">
       <div className="card-container">
      {characters.map(character => (
        
        <CharacterCard key ={characters.id} {...character} />
        
      ))}
    </div>
    
     
    </section>
  );

//   function CharacterDetails({characters}) {
//   return (
//     <Link to={`/characters/${characters.id}`} >
//     <CharacterCard {...characters} />
    
//     </Link>
//   );
// }
}

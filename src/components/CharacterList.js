import React, { useEffect, useState } from "react";
import axios from "axios"
import CharacterCard from "./CharacterCard"
// import {Link} from "react-router-dom"

const CharacterList = (props) => {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacter] = useState([]);



  useEffect(() => {
    const person = props.match.params.id;
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(response);
      
      setCharacter(response.data.results);
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


}

// const CharacterSearch = ({characters}) => {
//     const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect (() => {
//     const results = characters.filter(character => {
//       character.toLowerCase().includes(searchTerm)
//     });
//     setSearchResults(results)
//   })
//   return (
//     <form>
//       <label for="search">Search:</label>
//       <input 
//         id="search"
//         type="text"
//         name="textfield"
//         value={searchTerm}
//         onChange={handleChange}
//         />
//       </form>
    
    
//   );
// }
export default CharacterList;


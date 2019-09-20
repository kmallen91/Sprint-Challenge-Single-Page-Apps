import React, {useState, useEffect } from "react";
import Header from "./components/Header.js";
import { Route, Link } from "react-router-dom"
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"
import CharacterSearch from "./components/CharacterList"


export default function App() {
  // const [searchTerm, setSearchTerm] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  

  return (
    <main>
    
      <Header />
      <div className="links">
      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>      
      </div>
      
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters/:id" render={props => <CharacterList {...props}/>} />
     
     
    </main>
    
  );
}

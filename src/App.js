import React from "react";
import Header from "./components/Header.js";
import { Route, Link } from "react-router-dom"
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"


export default function App() {
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

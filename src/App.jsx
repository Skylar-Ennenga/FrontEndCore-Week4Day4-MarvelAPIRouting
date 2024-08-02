import React from "react";
import { Routes, Route } from "react-router-dom";
import CharacterList from "./Components/BrowseCharacters";
import CharacterDetails from "./Components/CharacterDetail";
import Home from "./Components/Home";
import Comics from "./Components/Comics";
import NotFound from "./Components/NotFound"

function App() {
  
  // Not Needed for this project since i dont need to store data on this page for other pages to use.
  // // This state variable will hold the selected character
  // const [selectedCharacter, setSelectedCharacter] = useState(null);
  
  // //  This function will be called when a character is selected
  // const handleCharacterSelect = (character) => {
  //   setSelectedCharacter(character); // Set the selected character
  // };

  return (
    <div className="app-container">
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/character-list' element={ <CharacterList/> } />
        <Route path='/character-details/:id' element={ <CharacterDetails/> } />
        <Route path='/comics' element={ <Comics/> } />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;


import {useState} from "react";
import CharacterList from "./CharacterList";
import CharacterDetails from "./CharacterDetail";

function App() {
  // This state variable will hold the selected character
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  
  //  This function will be called when a character is selected
  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character); // Set the selected character
  };

  return (
    <div>
      {/*            Fishing line over to the the list page to pull back the selected character */}
      <CharacterList onCharacterSelect={handleCharacterSelect} />
      {selectedCharacter && (
        // Pass the selected character's ID to the details component
        <CharacterDetails characterId={selectedCharacter.id} />
      )}
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const CharacterList = ({ onCharacterSelect }) => {
    // This creates a variable called characters to set up the state, 
    // it will start as an empty list but the state will change to a list of characters 
    // once the fetchCharacters function is called
    const [characters, setCharacters] = useState([]);
    // We fetch the list of characters from the API and set the state
    const fetchCharacters = async () => {
        const publicKey = '2bdb6e78d29e1c86c2bf230fb81f5183';
        const hash = 'c6dfdd90a1dd117377e6bf5168dbd719';
        const url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`;

        try {
            const response = await axios.get(url);
            const data = response.data.data.results;
            setCharacters(data);
            console.log(data);
        } catch (error) {
            console.error("Error fetching characters:", error);
        }
    }
    // this useEffect hook will call the fetchCharacters function when the component is mounted
    // it is mounted when the page is loaded for the first time 
    useEffect(() => {
        fetchCharacters();
    }, []);

    // This is our bobber in our fishing analogy, 
    // it will be called back when a character is selected and stored 
    // in the app.jsx file to be called when the the details page needs it.
    const handleCharacterSelect = (character) => {
        // console.log("Selected character:", character);
        onCharacterSelect(character); 
    }
    // return is return didnt add much to the display cuz havving a bit of a hard time to get the api to load 
    // proerly and each redload takes a few mins to get the data back
    return (
        
        <div className="row character-list">
        {characters.map(character => (
            <div className="card col-md-3" key={character.id}>
                <img
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    alt={character.name}
                    className="card-img-top h-100"
                />
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => handleCharacterSelect(character)}
                    >
                        Details
                    </button>
                </div>
            </div>
        ))}
    </div>
    
    );
}

export default CharacterList;
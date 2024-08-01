import { useState, useEffect } from 'react';
import axios from 'axios';


const CharacterDetails = ({ characterId }) => { // Pass the character ID as a prop
    // This does the same thing as on the character list page, 
    // just setting up the character to be able to store info since we will do another api call
    const [character, setCharacter] = useState(null);
    // only difference is this time the API call is for a specific character that is the character 
    // ID from the list page that is storedin the app
    const fetchCharacterDetails = async () => {
        const publicKey = '2bdb6e78d29e1c86c2bf230fb81f5183';
        const hash = 'c6dfdd90a1dd117377e6bf5168dbd719';
        const url = `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=${publicKey}&hash=${hash}`;

        try {
            const response = await axios.get(url);
            const data = response.data.data.results[0]; 
            setCharacter(data);
        } catch (error) {
            console.error("Error fetching character details:", error);
        }
    }
    // This verifies we have a character ID before calling the fetchCharacterDetails function
    useEffect(() => {
        if (characterId) {
            fetchCharacterDetails();
        }
    }, [characterId]); // This will run the effect when the character ID changes

    // same same but different, this time we are displaying the character details
    return (
        <ul className="list-group list-group-flush">

            {character ? (
                <>
                    <li className="list-group-item">Name: {character.name}</li>
                    <li className="list-group-item">Description: {character.description}</li>
                    <li className="list-group-item">Comics Available: {character.comics.available}</li>

                    
                </>
            ) : (
                <li>Loading...</li>
            )}
        </ul>
    );
}

export default CharacterDetails;
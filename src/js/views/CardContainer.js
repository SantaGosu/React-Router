import React, { useEffect, useState  } from 'react';
import CharacterCard from '../component/CharacterCard';
import 'bootstrap/dist/css/bootstrap.min.css';


const CardContainer = () => {
    const [id, setId] = useState([])

    const getPeople = () => {
        fetch("https://swapi.dev/api/people")
        .then(response => response.json())
        .then(response => setId(response.results))
        .catch(err => console.log("ERROR FOR GET: " + err.message))
    }

	useEffect(() => {
		getPeople()	
	}, []);

    return(
            <div className="cardHolder scrolling-wrapper">
            {id.map((person) => {
                return (
                    <CharacterCard person={person} />
                );
            })}
	        </div>
        );
}

export default CardContainer;
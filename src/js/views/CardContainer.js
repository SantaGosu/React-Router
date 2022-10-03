import React, { useEffect, useState  } from 'react';
import CharacterCard from '../component/CharacterCard';
import 'bootstrap/dist/css/bootstrap.min.css';


const CardContainer = () => {
    const [people, getPeople] = useState([])

    const getPerson = () => {
        fetch("https://swapi.dev/api/people")
        .then(response => response.json())
        .then(response => getPeople(response.results))
        .catch(err => console.log("ERROR FOR GET: " + err.message))
    }

	useEffect(() => {
		getPerson()	
	}, );

    return(
        <>
            <div className="cardHolder scrolling-wrapper">
            {people.map((person, index) => {
                return (
                    <CharacterCard key={index} person={person} />
                    );
            })}
	        </div>
           
        </>
        );
}

export default CardContainer;
import React, { useEffect, useState, useContext  } from 'react';
import CharacterCard from '../../component/Characters/CharacterCard';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Context } from "../../store/appContext";

const PersonContainer = () => {

    const [people, setPeople] = useState([]);

    // const { store, actions } = useContext(Context);

    const getPerson = () => {
        fetch(`https://swapi.dev/api/people/`)
        .then(response => response.json())
        .then(response => setPeople(response.results))
        .catch(err => console.log("ERROR FOR GET: " + err.message))
    }

	useEffect(() => {
		getPerson()	
	},[] );

    return(
        <>
            <div className="cardHolder scrolling-wrapper">
            {people.map((person, index) => {
                return (
                    <>
                    <CharacterCard key={index} index={index} person={person} >
                        </CharacterCard>
                    </>
                    );
            })}
	        </div>
        </>
        );
}

export default PersonContainer;
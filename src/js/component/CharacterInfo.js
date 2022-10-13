import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


const CharacterInfo = () => {

	const [character, setCharacter] = useState([]);
	const params = useParams();

    const getPerson = () => {
        fetch(`https://swapi.dev/api/people/${params.id}`)
        .then(response => response.json())
        .then(response => setCharacter(response))
        .catch(err => console.log("ERROR FOR GET: " + err.message))
    }

	useEffect(() => {
		getPerson()	
	},[] );


    return( 
        <div className="card ">
				<img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG" className="card-img-top"  />
				<div className="card-body">
					<h5>Name: {character.name}</h5>
                    <p className="card-text"> height: {character.height} </p>
					<p className="card-text"> mass: {character.mass} </p>
                    <p className="card-text"> Hair Color: {character.hair_color} </p>
					<p className="card-text"> Eye Color: {character.eye_color} </p>
                    <p className="card-text"> birth_year: {character.birth_year} </p>
					<p className="card-text"> Gender: {character.gender} </p>
					<Link to="/">
						<button className="btn btn-primary">Back to Home</button>
					</Link>
				</div>
			</div>
    )
}

export default CharacterInfo;
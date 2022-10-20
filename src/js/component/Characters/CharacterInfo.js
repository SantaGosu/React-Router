import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../../../styles/CardInfo.css";

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
        <div className="person-box">
			<h1 className="character-title">Name: {character.name}</h1>
				<img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG" className="img" />
				<div className="person-info">
					<h1>Character info:</h1>
                    <p className="card-text"> Height: {character.height} </p>
					<p className="card-text"> Mass: {character.mass} </p>
                    <p className="card-text"> Hair Color: {character.hair_color} </p>
					<p className="card-text"> Eye Color: {character.eye_color} </p>
					<p className="card-text"> Gender: {character.gender} </p>
				</div>
				<Link to="/">
						<button className="btn btn-primary person-button">Back to Home</button>
				</Link>
			</div>
    )
}

export default CharacterInfo;
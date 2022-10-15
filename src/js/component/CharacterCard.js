import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/home.css";
import { Link } from "react-router-dom";


const CharacterCard = (props) => {
	


    return(
		<>
		<div>
			<div className="card ">
				<img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG" className="card-img-top"  />
				<div className="card-body">
					<h5>Name: {props.person.name}</h5>
					<p className="card-text"> Hair Color: {props.person.hair_color} </p>
					<p className="card-text"> Eye Color: {props.person.eye_color} </p>
					<p className="card-text"> Gender: {props.person.gender} </p>
					<p className='card-text'>person {props.person.name} </p>
					<Link to={`/character/${props.index + 1}`}>
                    <button className="btn btn-outline-primary">Learn More</button> 
                    </Link>
				</div>
			</div>
		</div>
	</>
    )
}

export default CharacterCard;
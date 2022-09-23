import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/home.css";

const PlanetCard = (props) => {
	

    return(
		<>
		<div>
			<div className="card">
				<img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG" className="card-img-top"  />
				<div className="card-body">
					<h5>Name: {props.Planet.name}</h5>
					<p className="card-text"> Gravity: {props.Planet.gravity}</p>
					<p className="card-text"> Terrain: {props.Planet.terrain} </p>
					<p className="card-text"> Population: {props.Planet.population} </p>
					<a href="#" className="btn btn-outline-primary card-btn">Learn More</a>
					<a href="#" className="btn btn-outline-primary like-btn">♥</a>
				</div>
			</div>
		</div>
	</>
    )
}

export default PlanetCard;
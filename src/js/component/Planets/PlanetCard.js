import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../styles/home.css";
import { Link } from 'react-router-dom';

const PlanetCard = (props) => {
	

    return(
		<>
		<div>
			<div className="card">
				<img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG" className="card-img-top"  />
				<div className="card-body">
					<h5>Name: {props.planet.name}</h5>
						<p className="card-text"> Gravity: {props.planet.gravity}</p>
						<p className="card-text"> Terrain: {props.planet.terrain} </p>
						<p className="card-text"> Population: {props.planet.population} </p>
					<Link to={`/planet/${props.index + 1}`}>
						<button className="btn btn-dark card-btn">Learn More(p)</button>
					</Link>
					<a href="#" className="btn btn-dark like-btn">♥</a>
				</div>
			</div>
		</div>
	</>
    )
}

export default PlanetCard;
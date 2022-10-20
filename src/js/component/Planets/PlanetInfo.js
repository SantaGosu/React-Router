import React, { useState, useEffect } from "react";
import { useParams, Link }  from "react-router-dom";


function PlanetInfo() {

    const [planet, setPlanet ] = useState([]);
    const params = useParams();


    const getPlanetApi = () => {
      fetch(`https://swapi.dev/api/planets/${params.id}`)
      .then(response => response.json())
      .then(response => setPlanet(response.results))
      .catch(err => console.log("ERROR FOR GET VEHICLE: " + err.message))
  }

useEffect(() => {
  getPlanetApi()	
},[] );


  return (
        <div className="card ">
				<img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG" className="card-img-top"  />
				<div className="card-body">
					<h5>Name: {planet.name}</h5>
            <p className="card-text"> rotation_period: {planet.rotation_period} </p>
					  <p className="card-text"> orbital_period: {planet.orbital_period} </p>
            <p className="card-text"> diameter: {planet.diameter} </p>
					  <p className="card-text"> climate: {planet.climate} </p>
            <p className="card-text"> gravity: {planet.gravity} </p>
					  <p className="card-text"> terrain: {planet.terrain} </p>
            <p className="card-text"> population: {planet.population} </p>
					<Link to="/">
						<button className="btn btn-primary">Back to Home</button>
					</Link>
				</div>
			</div>
  )
}

export default PlanetInfo;
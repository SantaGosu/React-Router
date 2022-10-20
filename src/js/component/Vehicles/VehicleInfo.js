import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


const VehicleInfo = () => {

	const [vehicle, setVehicle] = useState([]);
	const params = useParams();

    const getVehicle = () => {
        fetch(`https://swapi.dev/api/vehicles/${params.id}`)
        .then(response => response.json())
        .then(response => setVehicle(response))
        .catch(err => console.log("ERROR FOR GET: " + err.message))
    }

	useEffect(() => {
		getVehicle()	
	},[] );


    return( 
        <div className="card ">
				<img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG" className="card-img-top"  />
				<div className="card-body">
					<h5>Name: {vehicle.name}</h5>
                    <p className="card-text"> model: {vehicle.model} </p>
					<p className="card-text"> manufacturer: {vehicle.manufacturer} </p>
                    <p className="card-text"> price: {vehicle.cost_in_credits} </p>
					<p className="card-text"> passengers: {vehicle.passengers} </p>
                    <p className="card-text"> max speed: {vehicle.max_atmosphering_speed} </p>
					<p className="card-text"> cargo_capacity: {vehicle.cargo_capacity} </p>
					<Link to="/">
						<button className="btn btn-primary">Back to Home</button>
					</Link>
				</div>
			</div>
    )
}

export default VehicleInfo;
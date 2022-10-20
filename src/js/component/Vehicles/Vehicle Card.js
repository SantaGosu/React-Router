import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../styles/home.css";
import { Link } from "react-router-dom";

const VehicleCard = (props) => {
	

    return(
		<>
		<div>
			<div className="card">
				<img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG" className="card-img-top"  />
				<div className="card-body">
					<h5>Name: {props.vehicle.name}</h5>
						<p className="card-text"> Model: {props.vehicle.Model}</p>
						<p className="card-text"> Passengers: {props.vehicle.passengers} </p>
						<p className="card-text"> Price: {props.vehicle.cost_in_credits} </p>
					<Link to={`/vehicle/${props.index + 1}`}>
                    	<button className="btn btn-dark">Learn More</button> 
                    </Link>
					<a href="#" className="btn btn-dark like-btn">♥</a>
				</div>
			</div>
		</div>
	</>
    )
}

export default VehicleCard;
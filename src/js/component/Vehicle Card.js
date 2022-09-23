import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VehicleCard = (props) => {
	

    return(
		<>
		<div>
			<div className="card">
				<img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG" className="card-img-top"  />
				<div className="card-body">
					<h5>Name: {props.Vehicle.name}</h5>
					<p className="card-text"> Model: {props.Vehicle.Model}</p>
					<p className="card-text"> Passengers: {props.Vehicle.passengers} </p>
					<p className="card-text"> Price: {props.Vehicle.cost_in_credits} </p>
					<a href="#" className="btn btn-outline-primary card-btn">Learn More</a>
					<a href="#" className="btn btn-outline-primary like-btn">♥</a>
				</div>
			</div>
		</div>
	</>
    )
}

export default VehicleCard;
import React, { useEffect, useState  } from 'react';
import VehicleCard from '../../component/Vehicles/Vehicle Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const VehicleContainer = () => {
    const [car, setCar] = useState([]);

    const getVehicle = () => {
        fetch(`https://swapi.dev/api/vehicles/`)
        .then(response => response.json())
        .then(response => setCar(response.results))
        .catch(err => console.log("ERROR FOR GET VEHICLE: " + err.message))
    }

	useEffect(() => {
		getVehicle()	
	});

    return(
            <div className="cardHolder scrolling-wrapper">
            {car.map((vehicle, index) => {
                return (
                    <VehicleCard key={index} index={index} vehicle={vehicle} />
                );
            })}
	        </div>
        );
}

export default VehicleContainer;
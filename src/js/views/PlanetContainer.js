import React, { useEffect, useState  } from 'react';
import PlanetCard from '../component/PlanetCard';
import 'bootstrap/dist/css/bootstrap.min.css';


const PlanetContainer = () => {
    const [planet, setPlanet] = useState([]);

    const getPlanetApi = () => {
        fetch("https://swapi.dev/api/planets")
        .then(response => response.json())
        .then(response => setPlanet(response.results))
        .catch(err => console.log("ERROR FOR GET VEHICLE: " + err.message))
    }

	useEffect(() => {
		getPlanetApi()	
	});

    return(
            <div className="cardHolder scrolling-wrapper">
            {planet.map((Planet, index) => {
                return (
                    <PlanetCard key={index} Planet={Planet} />
                );
            })}
	        </div>
        );
}

export default PlanetContainer;
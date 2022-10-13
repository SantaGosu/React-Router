import React, { useEffect, useState, useContext  } from 'react';
import PlanetCard from '../../component/PlanetCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context  from '../../store/appContext.js'
import { Route } from 'react-router';

const PlanetContainer = () => {
    // const { actions } = useContext(Context);
    const [planets, setPlanets] = useState([]);

    const getPlanetApi = () => {
        fetch(`https://swapi.dev/api/planets/`)
        .then(response => response.json())
        .then(response => {
            setPlanets(response.results)
            // actions.setPlanets(response.results)
        })
        .catch(err => console.log("ERROR FOR GET PLANET: " + err.message))
    }

	useEffect(() => {
		getPlanetApi()	
	});

    return(
            <div className="cardHolder scrolling-wrapper">
            {planets.map((planet, index) => {
                return (
                <>
                    <PlanetCard key={index} index={index} planet={planet} />
                </>
                );
            })}
	        </div>
        );
}

export default PlanetContainer;
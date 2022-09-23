import React from "react";
import "../../styles/home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import VehicleContainer from "./VehicleContainer";
import CardContainer from "./CardContainer";
import PlanetContainer from "./PlanetContainer";



const Home = () => {


	return(<>
		<h1>Characters</h1>
			<CardContainer />
			<br />
		<h1>Vehicles</h1>
			<VehicleContainer />
			<br />
		<h1>Planets</h1>
		<PlanetContainer />
            <br />
		</>
		)
}

export default Home;
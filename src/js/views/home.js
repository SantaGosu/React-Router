import React from "react";
import "../../styles/home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import VehicleContainer from "./Containers/VehicleContainer";
import CardContainer from "./Containers/CardContainer";
import PlanetContainer from "./Containers/PlanetContainer";
import Navbar from '../component/Navbar/Navbar'




const Home = () => {


	return(
	<>
		<Navbar/>
		<div className="Home-Layout">
			<h1>Characters</h1>
				<CardContainer />
			<br />
			<h1>Vehicles</h1>
				<VehicleContainer />
			<br />
			<h1>Planets</h1>
				<PlanetContainer />
			<br />
		</div>
		</>
		)
}

export default Home;
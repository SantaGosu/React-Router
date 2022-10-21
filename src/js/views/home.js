import React from "react";
import "../../styles/home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import VehicleContainer from "./Containers/VehicleContainer";
import PersonContainer from "./Containers/PersonContainer";
import PlanetContainer from "./Containers/PlanetContainer";
import Navbar from '../component/Navbar/Navbar'



const Home = () => {


	return(
	<>
	<div className="container-title">
		<div className="row">
			<div className="col-10">
				<h1 className="people-title">People</h1>
			</div>
			<div className="col-2">
				<Navbar/>
			</div>
		</div>
	</div>
		<div className="Home-Layout">
				<PersonContainer />
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
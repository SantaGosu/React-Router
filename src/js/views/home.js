import React from "react";
import "../../styles/home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import VehicleContainer from "./Containers/VehicleContainer";
import PersonContainer from "./Containers/PersonContainer";
import PlanetContainer from "./Containers/PlanetContainer";
import Navbar from '../component/Navbar/Navbar'
import TodoList from "../component/Todo List/TodoList";


const Home = () => {


	return(
	<>
		<Navbar/>
		<TodoList />
		<div className="Home-Layout">
			<h1>Characters</h1>
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
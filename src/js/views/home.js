import React from "react";
import "../../styles/home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardContainer from "./CardContainer";

export const Home = () => {


	return(<>
		<h1>Characters</h1>
			<CardContainer />
			<br />
		<h1>Vehicles</h1>
			<br />
		<h1>Planets</h1>
		</>
		)
}

export default Home;
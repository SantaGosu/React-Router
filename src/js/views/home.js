import React from "react";
import "../../styles/home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import VehicleContainer from "./VehicleContainer";
import CardContainer from "./CardContainer";
import PlanetContainer from "./PlanetContainer";
import CharacterInfo from "../component/CharacterInfo/CharacterInfo"



const Home = () => {


	return(<>
	<div className="container-flex">
  		<div className="row">
    		<div className="col-11">
				<h1>Characters</h1>
			</div>
                <div className="col-1">
					<button>Favorites</button>
			</div>
		</div>
	</div>
			<CardContainer />
			<br />
		<h1>Vehicles</h1>
			<VehicleContainer />
			<br />
		<h1>Planets</h1>
		<PlanetContainer />
            <br />
		{/* <CharacterInfo /> */}
		</>
		)
}

export default Home;
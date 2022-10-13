import React from "react";
import "../../styles/home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import VehicleContainer from "./Containers/VehicleContainer";
import CardContainer from "./Containers/CardContainer";
import PlanetContainer from "./Containers/PlanetContainer";




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
		</>
		)
}

export default Home;
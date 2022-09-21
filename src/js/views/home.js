import React from "react";
import "../../styles/home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "../component/Card";

export const Home = () => (
	<div className="cardHolder scrolling-wrapper">
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
	</div>
);

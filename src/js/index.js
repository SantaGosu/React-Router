//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Home from "./views/home";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));

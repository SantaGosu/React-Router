import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./views/home";
import CharacterInfo from "./component/Characters/CharacterInfo";
import PlanetInfo from "./component/Planets/PlanetInfo";
import VehicleInfo from "./component/Vehicles/VehicleInfo";
import Navbar from "./component/Navbar/Navbar";

export const Layout = () => {

  return (
    <div>
      <BrowserRouter>

        <div>
          <Switch>
            <Route exact path="/" component={Home} />e
            <Route exact path="/character/:id" component={CharacterInfo} />
            <Route exact path="/planet/:id" component={PlanetInfo} />
            <Route exact path="/vehicle/id" component={VehicleInfo} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Layout;

import {
  BrowserRouter,
  Switch,
  Route, 

} from "react-router-dom";
import React from "react";
import Home from "./views/home";
import CharacterInfo from "./component/CharacterInfo";
import PlanetInfo from "./component/PlanetInfo";
import VehicleInfo from "./component/VehicleInfo";

export const Layout = () => {

  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
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

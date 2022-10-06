import {
  BrowserRouter,
  Switch,
  Route, 

} from "react-router-dom";
import React from "react";
import Home from "./views/home";
import CharacterInfo from "./component/CharacterInfo/CharacterInfo";


export const Layout = () => {


  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path= {`/Info/:id`} >
                <CharacterInfo />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Layout;

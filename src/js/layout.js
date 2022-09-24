import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min"
import Home from "./views/home";
import CharacterInfo from "./component/CharacterInfo/CharacterInfo"


export const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/Home" component={Home} />
                <Route path="/Info/:id" component={CharacterInfo} />
                <Route path="/blogs/:id">
                    <CharacterInfo />
                </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Layout;
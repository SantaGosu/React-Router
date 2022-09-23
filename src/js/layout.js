import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min"
import Home from "./views/home";


export const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/Home" component={Home} />
            
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Layout;
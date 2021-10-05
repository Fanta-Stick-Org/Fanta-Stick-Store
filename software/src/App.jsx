import Login from 'pages/login';
import Inicio from 'pages/inicio';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterProduct from 'pages/registerProduct';
import ListProducts from 'pages/listProducts';
import UpdateProduct from 'pages/updateProduct';
import LayoutContenido from 'layouts/layoutContenido';
import LayoutLogin from 'layouts/layoutLogin';

function App() {
    return (
        <Router>
            <LayoutContenido>
                <Switch>
                    <Route path='/registerProduct'>
                        <RegisterProduct />
                    </Route>
                    <Route path='/listProducts'>
                        <ListProducts />
                    </Route>
                    <Route path='/updateProduct'>
                        <UpdateProduct />
                    </Route>
                    <Route path='/'>
                        <Inicio />
                    </Route>
                </Switch>
            </LayoutContenido>
            <LayoutLogin>
                <Switch>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                </Switch>
            </LayoutLogin>
        </Router>

    )
}

export default App;

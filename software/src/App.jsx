import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from 'pages/login';
import Inicio from 'pages/inicio';
import RegisterProduct from 'pages/registerProduct';
import RegisterSale from 'pages/registerSale';
import ListProducts from 'pages/listProducts';
import UpdateProduct from 'pages/updateProduct';
import LayoutContenido from 'layouts/layoutContenido';
import LayoutLogin from 'layouts/layoutLogin';
import ListSales from 'pages/listSales';

function App() {
    return (
        <Router>
            <Switch>
                <Route path={['/registerProduct', '/registerSale', '/listProducts', '/listSales', '/updateProduct', '/']}>
                    <LayoutContenido>
                        <Switch>
                            <Route path='/registerProduct'>
                                <RegisterProduct />
                            </Route>
                            <Route path='/registerSale'>
                                <RegisterSale />
                            </Route>
                            <Route path='/listProducts'>
                                <ListProducts />
                            </Route>
                            <Route path='/listSales'>
                                <ListSales />
                            </Route>
                            <Route path='/updateProduct'>
                                <UpdateProduct />
                            </Route>
                            <Route path='/'>
                                <Inicio />
                            </Route>
                        </Switch>
                    </LayoutContenido>
                </Route>
                <Route path={['/login']}>
                    <LayoutLogin>
                        <Switch>
                            <Route path='/login'>
                                <Login />
                            </Route>
                        </Switch>
                    </LayoutLogin>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
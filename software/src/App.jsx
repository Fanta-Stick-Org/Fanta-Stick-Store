import Login from 'pages/login';
import Header from 'components/header';
import Inicio from 'pages/inicio';
import Footer from 'components/footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import RegisterProduct from 'pages/registerProduct';
import ListProducts from 'pages/listProducts';
import UpdateProduct from 'pages/updateProduct';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path='/main-page'>
                    <Header/>
                    <Inicio/>
                    <Footer/>
                </Route>
                <Route path='/registerProduct'>
                    <Header/>
                    <RegisterProduct/>
                    <Footer/>
                </Route>
                <Route path='/listProducts'>
                    <Header/>
                    <ListProducts/>
                    <Footer/>
                </Route>
                <Route path='/updateProduct'>
                    <Header/>
                    <UpdateProduct/>
                    <Footer/>
                </Route>
                <Route path="/">
                    <Login/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;

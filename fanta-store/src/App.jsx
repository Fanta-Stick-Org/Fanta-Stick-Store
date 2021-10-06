import 'styles/styles.css';
import Login from 'pages/Login'
import Principal from 'pages/admin/Principal';
import Registro from 'pages/Registro';
import Index from 'pages/Index';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import AuhtLayout from 'layouts/AuhtLayout';
import Productos from 'pages/admin/Productos';
import Ventas from 'pages/admin/Ventas';


function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/admin', '/admin/productos', '/admin/ventas']}>
          <PrivateLayout>
            <Switch>
              <Route path='/admin/productos'>
                <Productos />
              </Route>
              <Route path='/admin/ventas'>
                <Ventas />
              </Route>
              <Route path='/admin'>
                <Principal />
              </Route>
            </Switch>
          </PrivateLayout>
        </Route>
        <Route path={['/login', '/registro']}>
          <AuhtLayout>
            <Switch>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/registro'>
                <Registro />
              </Route>
            </Switch>
          </AuhtLayout>
        </Route>
        <Route path={['/']}>
          <PublicLayout>
            <Route path='/'>
              <Index />
            </Route>
          </PublicLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
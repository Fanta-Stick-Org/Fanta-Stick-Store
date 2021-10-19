import Login from 'pages/auth/Login'
import Principal from 'pages/admin/Principal'
import Registro from 'pages/auth/Registro'
import Index from 'pages/Index'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Auth0Provider } from "@auth0/auth0-react";
import PublicLayout from 'layouts/PublicLayout'
import PrivateLayout from 'layouts/PrivateLayout'
import AuhtLayout from 'layouts/AuhtLayout'
import Productos from 'pages/admin/Productos'
import Ventas from 'pages/admin/Ventas'
import ListProductos from 'pages/admin/productos/ListProductos'
import RegisProducto from 'pages/admin/productos/RegisProducto'
import VeriProductos from 'pages/admin/productos/VeriProductos'
import RegisVentas from 'pages/admin/ventas/RegisVentas'
import ListVentas from 'pages/admin/ventas/ListVentas'
import VeriVentas from 'pages/admin/ventas/VeriVentas'
import VeriUsuarios from 'pages/admin/users/VeriUsuarios'
import Perfil from 'pages/Perfil'
import { UserContext } from 'context/userContext'
import { useState } from 'react'


function App() {

  const [userData, setUserData] = useState({});

  return (
    <Auth0Provider
      domain="fanta-stick.us.auth0.com"
      clientId="AlYD5aX6HvZTKucwiUQBAa9kF6QgmVq4"
      redirectUri="http://localhost:3000/admin"
      audience='https://api-autenticacion-fanta-store'
    >
      <UserContext.Provider value={{ userData, setUserData }}>
        <Router>
          <Switch>
            <Route path={['/admin', '/admin/productos', '/admin/ventas', '/admin/perfil', '/admin/productos/registrar', '/admin/productos/listar',
              '/admin/productos/maestro', '/admin/ventas/registrar', '/admin/ventas/listar',
              '/admin/ventas/maestro', '/admin/usuarios/maestro',]}>
              <PrivateLayout>
                <Switch>
                  <Route path='/admin/productos/registrar'>
                    <RegisProducto />
                  </Route>
                  <Route path='/admin/productos/listar'>
                    <ListProductos />
                  </Route>
                  <Route path='/admin/productos/maestro'>
                    <VeriProductos />
                  </Route>
                  <Route path='/admin/ventas/registrar'>
                    <RegisVentas />
                  </Route>
                  <Route path='/admin/ventas/listar'>
                    <ListVentas />
                  </Route>
                  <Route path='/admin/ventas/maestro'>
                    <VeriVentas />
                  </Route>
                  <Route path='/admin/usuarios/maestro'>
                    <VeriUsuarios />
                  </Route>
                  <Route path='/admin/productos'>
                    <Productos />
                  </Route>
                  <Route path='/admin/ventas'>
                    <Ventas />
                  </Route>
                  <Route path='/admin/perfil'>
                    <Perfil />
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
      </UserContext.Provider>
    </Auth0Provider>
  );
}

export default App;
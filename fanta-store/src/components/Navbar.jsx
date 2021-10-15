import React from 'react'
import { Link } from 'react-router-dom'
import ImagenLogo from './ImagenLogo'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <nav className='bg-yellow-600 bg-opacity-75'>
            <ul className='flex sm:flex-row w-full justify-between my-4'>
                <li className='w-32 mx-10'>
                    <Link to='/'><ImagenLogo /></Link>
                </li>
                {/* <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/admin/productos'>Productos</Link>
                    <ul>
                        <li><Link to='/admin/productos/registrar'>Registrar</Link></li>
                        <li><Link to='/admin/productos/listar'>Listar</Link></li>
                        <li><Link to='/admin/productos/actualizar'>Actualizar</Link></li>
                    </ul>
                </li>
                <li><Link to='/admin/ventas'>Ventas</Link>
                    <ul>
                        <li><Link to='/admin/ventas/registrar'>Registrar</Link></li>
                        <li><Link to='/admin/ventas/listar'>Listar</Link></li>
                        <li><Link to='/admin/ventas/actualizar'>Actualizar</Link></li>
                    </ul>
                </li>
                <li><Link to='/admin/usuarios'>Usuarios</Link>
                    <ul>
                        <li><Link to='/admin/usuarios/actualizar'>Actualizar</Link></li>
                    </ul>
                </li> */}
                <li className='px-16 py-6'>
                    <button onClick={() => loginWithRedirect()} className='btnGeneral'>
                        Iniciar Sesion
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

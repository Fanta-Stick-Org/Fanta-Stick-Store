import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'media/Logo blanco.png'

const Navbar = () => {
    return (
        <nav className='bg-yellow-600 bg-opacity-75'>
            <ul className='flex w-full justify-between my-4'>
                <li className='w-32 mx-10'>
                    <Link to='/'><img src={logo} alt="Logo-Fanta-Stick-Org"></img></Link>
                </li>
                {/* <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/'>Productos</Link>
                    <ul>
                        <li><Link to='/registerProduct'>Registrar</Link></li>
                        <li><Link to='/listProducts'>Listar</Link></li>
                        <li><Link to='/updateProduct'>Actualizar</Link></li>
                    </ul>
                </li>
                <li><Link to='/main-page'>Ventas</Link>
                    <ul>
                        <li><Link to='/registerSale'>Registrar</Link></li>
                        <li><Link to='/listSales'>Listar</Link></li>
                        <li><Link to='/updateSale'>Actualizar</Link></li>
                    </ul>
                </li>
                <li><Link to='/main-page'>Usuarios</Link>
                    <ul>
                        <li><Link to='/registerProduct'>Registrar</Link></li>
                        <li><Link to='/listProducts'>Listar</Link></li>
                        <li><Link to='/updateProduct'>Actualizar</Link></li>
                    </ul>
                </li> */}
                <li className='px-16 py-6'>
                    <Link to='/login'>
                        <button className='btnGeneral'>
                            Iniciar Sesion
                        </button></Link>

                </li>
            </ul>
        </nav>
    )
}

export default Navbar

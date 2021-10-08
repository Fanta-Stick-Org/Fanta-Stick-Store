import React from 'react'
import { Link } from 'react-router-dom'
import ImagenLogo from './ImagenLogo'

const Sidebar = () => {
    return (
        <nav className='hidden sm:flex sm:w-64 h-full flex-col text-center p-4 justify-between'>
            <div>
                <div className='w-44 mx-5 my-10'>
                    <Link to='/admin'><ImagenLogo /></Link>
                </div>
                <div className='my-7'>
                    <Ruta icono='fas fa-user-circle' ruta='/admin/perfil' nombre='Perfil'></Ruta>
                    <Ruta icono='fas fa-tag' ruta='/admin/productos' nombre='Productos'></Ruta>
                    <Ruta icono='fas fa-shopping-cart' ruta='/admin/ventas' nombre='Ventas'></Ruta>
                    <Ruta icono='fas fa-user' ruta='/admin/usuarios' nombre='Usuarios'></Ruta>
                </div>
            </div>
            <div>
                <button className='btnGeneral'>
                    <i class="fas fa-sign-out-alt pt-1 pr-2"> </i>
                    Cerrar Sesion
                </button>
            </div>
        </nav>
    )
}

const Ruta = ({ icono, ruta, nombre }) => {
    return (
        <Link to={ruta}>
            <button className='hover:bg-yellow-600 hover:bg-opacity-80 p-1 m-1 w-full text-left items-center rounded-md'>
                <i class={`${icono} w-7`}> </i>
                {nombre}
            </button>
        </Link>
    )
}
export default Sidebar

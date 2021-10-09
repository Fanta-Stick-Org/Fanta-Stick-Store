import React, { useState} from 'react'
import ResponsiveRoute from './ResponsiveRoute'

const SidebarResponsive = () => {

    const [mostrarNavegacion, setMostrarNavegacion] = useState(false);
    return (
        <div className='sm:hidden bg-blue-200' onClick={() => setMostrarNavegacion(!mostrarNavegacion)}>
            <i className={`mx-2 pt-3 fas fa-${mostrarNavegacion ? `times` : `bars`} hover:text-yellow-600 `}></i>
            {mostrarNavegacion &&
                <ul className='bg-green-500 hover:bg-green-200'>
                    <ResponsiveRoute ruta='/admin/perfil' nombre='Perfil' />
                    <ResponsiveRoute ruta='/admin/productos' nombre='Productos' />
                    <ResponsiveRoute ruta='/admin/ventas' nombre='Ventas' />
                    <ResponsiveRoute ruta='/admin/usuarios' nombre='Usuarios' />
                    <ResponsiveRoute ruta='/' nombre='Cerrar Sesión' />
                </ul>
            }
        </div>
    )
}


export default SidebarResponsive

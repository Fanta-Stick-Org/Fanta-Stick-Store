import React from 'react'
import { Link } from 'react-router-dom'

const ResponsiveRoute = ({ruta, nombre}) => {
    return (
        <Link to={ruta}>
            <li className='text-white hover:text-white border-2 border-gray-300 p-1 pl-3'>{nombre}</li>
        </Link>
    )
}

export default ResponsiveRoute

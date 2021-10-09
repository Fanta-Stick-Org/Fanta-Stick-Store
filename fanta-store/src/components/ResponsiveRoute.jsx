import React from 'react'
import { Link } from 'react-router-dom'

const ResponsiveRoute = ({ruta, nombre}) => {
    return (
        <Link to={ruta}>
            <li className='text-gray-900 hover:text-white border border-gray-400 p-1 pl-3'>{nombre}</li>
        </Link>
    )
}

export default ResponsiveRoute

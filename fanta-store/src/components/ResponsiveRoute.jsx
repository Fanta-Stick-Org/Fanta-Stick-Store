import React from 'react'
import { Link } from 'react-router-dom'

const ResponsiveRoute = ({ruta, nombre}) => {
    return (
        <Link to={ruta}>
            <li className='text-gray-200 border border-gray-300 p-1'>{nombre}</li>
        </Link>
    )
}

export default ResponsiveRoute

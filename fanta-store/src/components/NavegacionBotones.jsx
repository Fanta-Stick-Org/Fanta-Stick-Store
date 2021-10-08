import React, { Link } from 'react'

const NavegacionBotones = ({ ruta, nombre }) => {
    return (
        <Link to={ruta}>
            <li className='linkGeneral'>{nombre}</li>
        </Link>
    )
}

export default NavegacionBotones

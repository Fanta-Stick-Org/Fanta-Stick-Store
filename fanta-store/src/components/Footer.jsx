import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-yellow-600 bg-opacity-75'>
            <ul className='flex w-full justify-between p-5 font-medium'>
                <li id='contacto' className='text-xl hover:text-white p-2 float-left transition-all'><Link to='/main-page'>Contacto</Link></li>
                <li className='text-xl hover:text-white p-2 transition-all'><a href="https://github.com/Fanta-Stick-Org/Fanta-Stick-Store">Github</a></li>
                <li className='text-xl p-2'><b>|</b></li>
                <li className='text-xl hover:text-white p-2 transition-all'><a href="https://trello.com/b/UvFvhLkZ/desarrollo-web">Trello</a></li>
                <li id='copyright' className='text-xl hover:text-white p-2 float-right transition-all'><Link to='/main-page'>@Copyright Fanta-Stick</Link></li>
            </ul>
        </footer>
    )
}

export default Footer

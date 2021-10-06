/* Auth Page */
import { Link } from 'react-router-dom'
import React from 'react'
import logo from 'media/Logo azul.png'

const AuhtLayout = ({ children }) => {
    return (
        <div className='bg-yellow-600 bg-opacity-75 min-h-screen flex flex-col items-center justify-center py-2 px-4 sm:px-6 lg:px-8'>
            <div className='w-full h-3 flex items-start'>
                <Link to='/'>
                    <i className='fas fa-home cursor-pointer text-white hover:text-indigo-500' />
                </Link>
            </div>
            <div className='max-w-md w-full'>
                <img className='mx-auto h-60 w-auto' src={logo} alt='Workflow' />
                {children}
            </div>
        </div>
    )
}

export default AuhtLayout

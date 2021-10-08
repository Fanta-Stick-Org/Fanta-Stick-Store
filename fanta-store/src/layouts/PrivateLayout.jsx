/* Private Page */

import Sidebar from 'components/Sidebar'
import SidebarResponsive from 'components/SidebarResponsive'
import React, { Link } from 'react'

const PrivateLayout = ({ children }) => {
    return (
        <div className='w-screen h-screen'>
            <div className='flex flex-col flex-nowrap sm:flex-row md:flex-row w-screen h-screen bg-yellow-600 bg-opacity-75'>
                <Sidebar />
                <SidebarResponsive />
                <main className='w-screen h-screen bg-blue-200 overflow-y-scroll pt-24'>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default PrivateLayout

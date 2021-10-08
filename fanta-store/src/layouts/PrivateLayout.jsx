/* Private Page */

import Sidebar from 'components/Sidebar'
import SidebarResponsive from 'components/SidebarResponsive'
import React from 'react'

const PrivateLayout = ({ children }) => {
    return (
        <div className='w-screen h-screen'>
            <div className='flex flex-col sm:flex-row flex-nowrap w-full h-full bg-yellow-600 bg-opacity-75'>
                <Sidebar />
                <SidebarResponsive/>
                <main className='flex w-full h-full bg-blue-200 overflow-y-scroll justify-center pt-24'>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default PrivateLayout

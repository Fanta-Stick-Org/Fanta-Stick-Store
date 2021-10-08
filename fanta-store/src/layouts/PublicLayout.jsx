/* Landing Page */

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import React from 'react'

const PublicLayout = ({ children }) => {
    return (
        <div className='flex flex-col justify-between w-screen h-screen'>
            <Navbar />
            <div className='flex flex-col sm:flex-row flex-nowrap w-screen h-full overflow-y-scroll bg-blue-200'>
                <main className='h-full'>{children}</main>
            </div>
            <Footer />
        </div>
    )
}

export default PublicLayout

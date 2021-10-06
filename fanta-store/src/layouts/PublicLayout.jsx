/* Landing Page */

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import React from 'react'

const PublicLayout = ({ children }) => {
    return (
        <div className='flex flex-col justify-between h-full'>
            <Navbar />
            <div className='h-full overflow-y-scroll bg-blue-200'>
                <main className='h-full'>{children}</main>
                <Footer />
            </div>
        </div>
    )
}

export default PublicLayout

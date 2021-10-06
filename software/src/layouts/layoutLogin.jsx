import React from 'react'

const LayoutLogin = ({ children }) => {
    return (
        <div className='flex flex-col justify-between h-screen'>
            <main>{children}</main>
        </div>
        
    )
}

export default LayoutLogin;

import { useUser } from 'context/userContext';
import React from 'react'

const PrivateRoute = ({ roleList, children }) => {

    const { userData } = useUser();

    if (roleList.includes(userData.rol)) {
        return children;
    } else {
        return (
            <div className='flex justify-center items-center h-full'>
                <div className='flex text-3xl bg-red-400 text-white text-center p-10'>
                    No estas autorizado para ver este sitio :( <br />
                    Comunícate con el Administrador si requieres el acceso 😊.
                </div>
            </div>
        );
    }
}


export default PrivateRoute

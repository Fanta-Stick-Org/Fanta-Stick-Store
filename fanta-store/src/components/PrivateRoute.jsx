import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import ReactLoading from 'react-loading';

const PrivateRoute = ({ children }) => {

    const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const fetchAuth0Token = async () => {
            // aqui se harian validaciones al token
            const accessToken = await getAccessTokenSilently({
                audience: 'https://api-autenticacion-fanta-store'
            });
            localStorage.setItem('token', accessToken);
        };
        if (isAuthenticated) {
            fetchAuth0Token();
        }
    }, [isAuthenticated, getAccessTokenSilently])

    if (isLoading) {
        return (
            <div className='flex justify-center items-center'>
                <ReactLoading type='cylon' color='#07f3eb' height={667} width={375} />
            </div>
        )
    }
    return isAuthenticated ? (
        <>{children}</>
    ) : (
        <div className='text-6xl text-red-500'>No estas autorizado</div>
    );
};

export default PrivateRoute

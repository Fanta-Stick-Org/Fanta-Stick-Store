import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import ReactLoading from 'react-loading';
import { obtenerInfoUsuario } from '../utils/api/apiUsuarios'

const PrivateRoute = ({ children }) => {

    const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const fetchAuth0Token = async () => {
            // aqui se harian validaciones al token

            //PASO 1 > PEIR TOKEN A AUTH0
            const accessToken = await getAccessTokenSilently({
                audience: 'https://api-autenticacion-fanta-store'
            });

            //PASO 2 > RECIBIR TOKEN DE AUTH0
            localStorage.setItem('token', accessToken); //guardamos el token en localstorage para tenerlo mientras el usuario use la app
            //o cada vez que inicie sesion

            //PASO 3 > ENVIARLE EL TOKEN AL BACKEND
            await obtenerInfoUsuario(
                (response) => {
                    console.log('response', response)
                },
                (error) => {
                    console.log('error', error)
                }
            );
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

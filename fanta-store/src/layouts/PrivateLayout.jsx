/* Private Page */
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import ReactLoading from 'react-loading';
import { obtenerInfoUsuario } from '../utils/api/apiUsuarios'
import { useUser } from 'context/userContext';
import Sidebar from 'components/Sidebar'
import SidebarResponsive from 'components/SidebarResponsive'

const PrivateLayout = ({ children }) => {

    const { isAuthenticated, isLoading, getAccessTokenSilently, logout } = useAuth0();
    const [loadingUserInfo, setLoadingUserInfo] = useState(false);
    const { setUserData } = useUser();

    useEffect(() => {
        const fetchAuth0Token = async () => {
            // aqui se harian validaciones al token

            //PASO 1 > PEIR TOKEN A AUTH0
            setLoadingUserInfo(true);
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
                    setUserData(response.data);
                    setLoadingUserInfo(false);
                },
                (error) => {
                    console.log('error', error)
                    logout({ returnTo: window.location.origin });
                    setLoadingUserInfo(false);
                }
            );
        };
        if (isAuthenticated) {
            fetchAuth0Token();
        }
    }, [isAuthenticated, getAccessTokenSilently, setUserData, logout])

    if (isLoading || loadingUserInfo) {
        return (
            <div className='flex justify-center items-center'>
                <ReactLoading type='cylon' color='#07f3eb' height={667} width={375} />
            </div>
        );
    };

    return (
        <div className='w-screen h-screen'>
            <div className='flex flex-col flex-nowrap sm:flex-row md:flex-row w-screen h-screen bg-yellow-600 bg-opacity-75'>
                <Sidebar />
                <SidebarResponsive />
                <main className='w-screen h-screen bg-blue-200 overflow-y-scroll pt-12'>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default PrivateLayout

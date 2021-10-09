import {
    useState,
    useEffect,
} from 'react'

const useActiveRoute = (locacion, ruta) => {


    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        console.log(locacion, ruta);
        if (locacion.pathname.includes(ruta)) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [locacion, ruta])

    return isActive;
}

export default useActiveRoute;
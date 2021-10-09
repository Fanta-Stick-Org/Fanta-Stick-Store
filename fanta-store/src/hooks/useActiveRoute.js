import {
    useState,
    useEffect,
} from 'react'
import {
    useLocation
} from 'react-router'

const useActiveRoute = (ruta) => {

    const locacion = useLocation();
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
import axios from "axios";
import {
    toast
} from 'react-toastify'; //para las alertas
import 'react-toastify/dist/ReactToastify.css';

//METODO GET 
export const obtenerVentas = async (setVentas, setEjecutarConsulta = () => {}) => {
    const options = {
        method: 'GET',
        url: 'http://localhost:5000/ventas/'
    };
    await axios
        .request(options)
        .then(function (response) {
            setVentas(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
    setEjecutarConsulta(false);
};

//METODO POST
export const registrarVentas = async (informacionConsolidada) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/ventas/', //url de mi base de datos
        headers: {
            'Content-Type': 'application/json'
        },
        data: informacionConsolidada
    };

    await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            toast.success('Venta agregada con éxito!!'); //se guarda en la base de datos si sale bien el toast debe mostrar .success
        })
        .catch(function (error) {
            console.error(error);
            toast.error('Error agregando la Venta'); //se guarda en la base de datos si sale error el toast debe cambiar a .error
        });
}

//METODO PATCH
export const actualizarVenta = async (infoNuevaVenta, venta, setEjecutarConsulta = () => {}, setEdit = () => {}) => {
    //enviar la info al backend
    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/ventas/${venta._id}/`,
        //`https://vast-waters-45728.herokuapp.com/vehicle/${infoNuevoProducto._id}/`
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            ...infoNuevaVenta
        },
    };

    await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            toast.success('Venta modificado con éxito');
            setEdit(false);
            setEjecutarConsulta(true);
        })
        .catch(function (error) {
            toast.error('Error modificando el venta');
            console.error(error);
        });
};

//METODO DELETE
export const eliminarVenta = async (venta, setEjecutarConsulta = () => {}) => {
    const options = {
        method: 'DELETE',
        url: `http://localhost:5000/ventas/${venta._id}/`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: {},
    };
    await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            setEjecutarConsulta(true);
            toast.success('Venta eliminado con éxito');
        })
        .catch(function (error) {
            console.error(error);
            toast.error('Error eliminando el venta');
        });
}
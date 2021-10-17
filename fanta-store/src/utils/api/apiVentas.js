import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`;
}

//METODO GET 
export const obtenerVentas = async (successCallback, errorCallback) => {
    const options = {
        method: 'GET',
        url: 'http://localhost:5000/ventas/',
        headers: {
            Authorization: getToken()
        }
    };
    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
};

//METODO POST
export const registrarVentas = async (data, successCallback, errorCallback) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/ventas/', //url de mi base de datos
        headers: {
            'Content-Type': 'application/json',
            Authorization: getToken()
        },
        data,
    };

    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
}

//METODO PATCH
export const actualizarVenta = async (id, data, successCallback, errorCallback) => {
    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/ventas/${id}/`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: getToken()
        },
        data,
    };

    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
};

//METODO DELETE
export const eliminarVenta = async (id, successCallback, errorCallback) => {
    const options = {
        method: 'DELETE',
        url: `http://localhost:5000/ventas/${id}/`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: getToken()
        },
    };
    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
}
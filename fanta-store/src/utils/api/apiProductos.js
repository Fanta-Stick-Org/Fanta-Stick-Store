import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`;
}
//METODO GET 
export const obtenerProductos = async (successCallback, errorCallback) => {
    const options = {
        method: 'GET',
        url: 'http://localhost:5000/productos/',
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
export const registrarProductos = async (data, successCallback, errorCallback) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/productos/',
        headers: {
            'Content-Type': 'application/json', 
            Authorization: getToken()
        },
        data
    };

    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
}

//METODO PATCH
export const actualizarProducto = async (id, data, successCallback, errorCallback) => {
    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/productos/${id}/`,
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
export const eliminarProducto = async (id, successCallback, errorCallback) => {
    const options = {
        method: 'DELETE',
        url: `http://localhost:5000/productos/${id}/`,
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
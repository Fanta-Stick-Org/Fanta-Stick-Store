import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

//METODO GET 
export const obtenerUsuarios = async (successCallback, errorCallback) => {
    const options = {
        method: 'GET',
        url: 'http://localhost:5000/usuarios/'
    };
    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
};

//METODO POST
export const registrarUsuarios = async (data, successCallback, errorCallback) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/usuarios/', //url de mi base de datos
        headers: {
            'Content-Type': 'application/json'
        },
        data,
    };

    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
};

//METODO PATCH
export const actualizarUsuario = async (id, data, successCallback, errorCallback) => {
    //enviar la info al backend
    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/usuarios/${id}/`,
        //`https://vast-waters-45728.herokuapp.com/vehicle/${infoNuevoProducto._id}/`
        headers: {
            'Content-Type': 'application/json'
        },
        data,
    };

    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
};

//METODO DELETE
export const eliminarUsuario = async (id, successCallback, errorCallback) => {
    const options = {
        method: 'DELETE',
        url: `http://localhost:5000/usuarios/${id}/`,
        headers: {
            'Content-Type': 'application/json'
        },
    };
    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
};
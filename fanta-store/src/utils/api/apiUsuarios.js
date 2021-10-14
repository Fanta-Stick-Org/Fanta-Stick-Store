import axios from "axios";
import {
    toast
} from 'react-toastify'; //para las alertas
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
export const registrarUsuarios = async (nuevoUsuario) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/usuarios/', //url de mi base de datos
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            _id: nuevoUsuario._id,
            name: nuevoUsuario.name,
            email: nuevoUsuario.email,
            rol: nuevoUsuario.rol,
            estadoUsuario: nuevoUsuario.estadoUsuario,
            password: nuevoUsuario.password
        }
    };

    await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            toast.success('Usuario agregado con éxito!!'); //se guarda en la base de datos si sale bien el toast debe mostrar .success
        })
        .catch(function (error) {
            console.error(error);
            toast.error('Error agregando el Usuario'); //se guarda en la base de datos si sale error el toast debe cambiar a .error
        });
}

//METODO PATCH
export const actualizarUsuario = async (infoNuevoUsuario, usuario, setEjecutarConsulta = () => {}, setEdit = () => {}) => {
    //enviar la info al backend
    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/usuarios/${usuario._id}/`,
        //`https://vast-waters-45728.herokuapp.com/vehicle/${infoNuevoProducto._id}/`
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            ...infoNuevoUsuario
        },
    };

    await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            toast.success('Usuario modificado con éxito');
            setEdit(false);
            setEjecutarConsulta(true);
        })
        .catch(function (error) {
            toast.error('Error modificando el usuario');
            console.error(error);
        });
};

//METODO DELETE
export const eliminarUsuario = async (usuario, setEjecutarConsulta = () => {}) => {
    const options = {
        method: 'DELETE',
        url: `http://localhost:5000/usuarios/${usuario._id}/`,
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
            toast.success('Usuario eliminado con éxito');
        })
        .catch(function (error) {
            console.error(error);
            toast.error('Error eliminando el usuario');
        });
}

export const obtenerVehiculos = async (setVehiculos, setEjecutarConsulta = () => {}) => {
    const options = {
        method: 'GET',
        url: 'https://vast-waters-45728.herokuapp.com/vehicle/'
    };
    await axios
        .request(options)
        .then(function (response) {
            setVehiculos(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
    setEjecutarConsulta(false);
};
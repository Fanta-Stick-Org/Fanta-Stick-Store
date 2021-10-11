import axios from "axios";
import {
    toast
} from 'react-toastify'; //para las alertas
import 'react-toastify/dist/ReactToastify.css';

//METODO GET 
export const obtenerProductos = async (setProductos, setEjecutarConsulta = () => {}) => {
    const options = {
        method: 'GET',
        url: 'https://vast-waters-45728.herokuapp.com/vehicle/'
    };
    await axios
        .request(options)
        .then(function (response) {
            setProductos(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
    setEjecutarConsulta(false);
};

//METODO POST
export const registrarProductos = async (nuevoProducto) => {
    const options = {
        method: 'POST',
        url: 'https://vast-waters-45728.herokuapp.com/vehicle/create/', //url de mi base de datos
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            name: nuevoProducto.name,
            brand: nuevoProducto.brand,
            model: nuevoProducto.model
        },
    };

    await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            toast.success('Producto agregado con éxito!!'); //se guarda en la base de datos si sale bien el toast debe mostrar .success
        })
        .catch(function (error) {
            console.error(error);
            toast.error('Error agregando el producto'); //se guarda en la base de datos si sale error el toast debe cambiar a .error
        });
}

//METODO PATCH
export const actualizarProducto = async (infoNuevoProducto, setEjecutarConsulta = () => {}, setEdit = () => {}) => {
    //enviar la info al backend
    const options = {
        method: 'PATCH',
        url: `https://vast-waters-45728.herokuapp.com/vehicle/${infoNuevoProducto._id}/`, 
        //`https://vast-waters-45728.herokuapp.com/vehicle/${infoNuevoProducto._id}/`
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            ...infoNuevoProducto
        },
    };

    await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            toast.success('Producto modificado con éxito');
            setEdit(false);
            setEjecutarConsulta(true);
        })
        .catch(function (error) {
            toast.error('Error modificando el producto');
            console.error(error);
        });
};

//METODO DELETE
export const eliminarProducto = async (producto, setEjecutarConsulta = () => {}) => {
    const options = {
        method: 'DELETE',
        url: 'https://vast-waters-45728.herokuapp.com/vehicle/delete/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            id: producto._id
        },
    };
    await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            setEjecutarConsulta(true);
            toast.success('vehículo eliminado con éxito');
        })
        .catch(function (error) {
            console.error(error);
            toast.error('Error eliminando el vehículo');
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
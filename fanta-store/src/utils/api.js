import axios from "axios";
import {
    toast
} from 'react-toastify'; //para las alertas
import 'react-toastify/dist/ReactToastify.css';

//METODO GET 
export const obtenerProductos = async (setProductos, setEjecutarConsulta = () => {}) => {
    const options = {
        method: 'GET',
        url: 'http://localhost:5000/productos'
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
        url: 'http://localhost:5000/productos/nuevo', //url de mi base de datos
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            _id: nuevoProducto._id,
            descripcion: nuevoProducto.descripcion,
            valorUnitario: nuevoProducto.valorUnitario,
            estado: nuevoProducto.estado
        }
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
export const actualizarProducto = async (infoNuevoProducto, producto, setEjecutarConsulta = () => {}, setEdit = () => {}) => {
    //enviar la info al backend
    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/productos/editar`,
        //`https://vast-waters-45728.herokuapp.com/vehicle/${infoNuevoProducto._id}/`
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            ...infoNuevoProducto,
            _id: producto._id
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
        url: 'http://localhost:5000/productos/eliminar',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            _id: producto._id
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
import React, { useState, useEffect } from 'react'
/* import 'styles/list.css' */
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'; //para las alertas
import { obtenerProductos } from 'utils/api';
import { nanoid } from 'nanoid';
import { Tooltip } from '@material-ui/core';
import Dialog from '@mui/material/Dialog';
import 'react-toastify/dist/ReactToastify.css';

const VeriProductos = () => {

    const [productos, setProductos] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    const [mostarTable, setMostrarTable] = useState(false);
    const [busqueda, setBusqueda] = useState('');

    // ue2> si ejecutarconsulta === true llama la funcion obtener productos que trae toda la info de db
    // asigna nuevamente la variable ejecutarconsulta en false
    useEffect(() => {
        // FUNCION PARA EL GET EN UTILS/API
        console.log('consulta', ejecutarConsulta);
        if (ejecutarConsulta) {
            obtenerProductos(setProductos, setEjecutarConsulta);
        }
    }, [ejecutarConsulta])


    // ue1 > reacciona a mostrar tabla en el boton lupa de la interfaz
    // cambia el estado para ejecutarconsulta y llega a ue2
    useEffect(() => {
        //obtener lista de vehículos desde el backend
        if (mostarTable) {
            setEjecutarConsulta(true);
        }
    }, [mostarTable]);

    return (
        <>
            <div className='px-6'>
                <a href='/admin/productos/' className='btnGeneralNav'><i className="fas fa-arrow-left"></i></a>
            </div>
            <div className='h-full pt-10'>
                <h1 className='tituloGeneral'>Administrador de productos</h1>
                <div className="flex items-center justify-center justify-items-start p-2">
                    <input className="inputGeneralList" onChange={(e) => setBusqueda(e.target.value)} value={busqueda} type="=text" name="" placeholder="Buscar" />
                    <div className="flex items-center justify-items-end pl-2">
                        <button className='btnGeneralList' onClick={() => setMostrarTable(!mostarTable)}><i className="fas fa-search"></i></button>
                    </div>
                </div>
                {mostarTable &&
                    <TablaProductos listaProductos={productos} setEjecutarConsulta={setEjecutarConsulta}
                        busqueda={busqueda} />
                }
                <ToastContainer position="bottom-right" autoClose={4000} closeOnClick />
            </div>
        </>
    )
};

const TablaProductos = ({ listaProductos, setEjecutarConsulta, busqueda }) => {
    const [productosFilter, setProdutosFilter] = useState(listaProductos);

    //reacciona al cambio en poductosFilter convierte el objeto listaproductos en un string
    //y muestra el la coincidencia con busqueda que viene como prop de veriproductos
    useEffect(() => {
        setProdutosFilter(
            listaProductos.filter((elemento) => {
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            }));
        //console.log('filtro', productosFilter) // muestra el array filtrado COMENTAR
    }, [busqueda, listaProductos])

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='table-container'>
                <div className='hidden md:block'>
                    <table id="table-list">
                        <thead>
                            <tr>
                                <th>Id Producto</th>
                                <th>Descripción</th>
                                <th>Valor Unitario</th>
                                <th>Estado</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productosFilter.map((producto) => {
                                return (
                                    <FilaProducto key={nanoid()} producto={producto} setEjecutarConsulta={setEjecutarConsulta} />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='flex flex-col w-full m-2 md:hidden'>
                    {productosFilter.map((producto) => {
                        return (
                            <div key={nanoid()} className='bg-green-400 hover:bg-gray-400 m-2 shadow-xl flex flex-col p-2 rounded-xl'>
                                <span>{producto.name}</span>
                                <span>{producto.brand}</span>
                                <span>{producto.model}</span>
                                <span>{producto.created}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

const FilaProducto = ({ producto, setEjecutarConsulta }) => {

    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [infoNuevoProducto, setInfoNuevoProducto] = useState({
        _id: producto._id,
        name: producto.name,
        brand: producto.brand,
        model: producto.model,
    });

    const actualizarProducto = async () => {
        //enviar la info al backend
        const options = {
            method: 'PATCH',
            url: `https://vast-waters-45728.herokuapp.com/vehicle/update`,
            headers: { 'Content-Type': 'application/json' },
            data: { ...infoNuevoProducto },
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

    const eliminarProducto = async () => {
        //ELIMINAR DE DB
        const options = {
            method: 'DELETE',
            url: 'https://vast-waters-45728.herokuapp.com/vehicle/delete/',
            headers: { 'Content-Type': 'application/json' },
            data: { id: producto._id },
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
        setOpenDialog(false);
    }
    return (
        <tr>
            {edit ? (
                <>
                    <td>{infoNuevoProducto._id}</td>
                    <td><input className='inputGeneral' type="text" value={infoNuevoProducto.name}
                        onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, name: e.target.value })}/* disabled */ /></td>
                    <td><input className='inputGeneral' type="text" value={infoNuevoProducto.brand}
                        onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, brand: e.target.value })} /></td>
                    <td><input className='inputGeneral' type="number" value={infoNuevoProducto.model}
                        onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, model: e.target.value })}/* min={0} */ /></td>
                    {/* <td>
                        <select className='inputGeneral' defaultValue={producto.estado}>
                            <option disabled>Seleccione...</option>
                            <option value="disponible">Disponible</option>
                            <option value="noDisponible">No Disponible</option>
                        </select>
                    </td> */}
                </>

            ) : (
                <>
                    <td>{producto._id.slice(20)}</td>
                    <td>{producto.name}</td>
                    <td>{producto.brand}</td>
                    <td>{producto.model}</td>
                </>
            )}
            {/* <td><Link to={`/admin/productos/actualizar/${producto.idProducto}`}>Actualizar</Link></td> */}
            <td>
                <div className='flex w-full justify-evenly'>
                    {edit ? (
                        <>
                            <Tooltip title='Confirmar Edición' arrow placement='bottom'>
                                <button type='submit'>
                                    <i onClick={() => actualizarProducto()} className='fas fa-check p-2 border-2 border-green-300 rounded-md 
                                    text-green-500 hover:text-green-700 hover:bg-green-500 hover:bg-opacity-20 hover:border-green-50
                                    transition-all'></i>
                                </button>
                            </Tooltip>
                            <Tooltip title='Cancelar Edición' arrow placement='bottom'>
                                <i onClick={() => setEdit(!edit)} className='fas fa-ban p-2 border-2 border-red-300 rounded-md 
                                text-red-600 hover:text-red-700 hover:bg-green-500 hover:bg-opacity-20 hover:border-red-100
                                transition-all'></i>
                            </Tooltip>
                        </>
                    ) : (
                        <>
                            <Tooltip title='Editar Producto' arrow placement='bottom'>
                                <i onClick={() => setEdit(!edit)} className='fas fa-pencil-alt p-2 border-2 border-gray-300 rounded-md 
                                text-yellow-600 hover:text-yellow-800 hover:bg-green-500 hover:bg-opacity-20 hover:border-green-100-100
                                transition-all'></i>
                            </Tooltip>
                            <Tooltip title='Eliminar Producto' arrow placement='bottom'>
                                <i onClick={() => setOpenDialog(true)} className='fas fa-trash p-2 border-2 border-red-300 rounded-md
                                text-red-600 hover:text-red-700 hover:bg-green-500 hover:bg-opacity-20 hover:border-red-100
                                transition-all'></i>
                            </Tooltip>
                        </>
                    )}

                </div>
                <Dialog open={openDialog}>
                    <div className='flex flex-col p-8 bg-gray-200 shadow-md rounded-sm'>
                        <h1 className='text-gray-900 text-lg font-medium'>¿Está seguro de querer eliminar este producto?</h1>
                        <div className='flex w-full items-center justify-center mt-4'>
                            <button onClick={() => eliminarProducto()} className='mx-2 px-4 py-2 bg-green-400 hover:bg-green-500 
                            transition-all text-white rounded-md shadow-md '>Sí</button>
                            <button onClick={() => setOpenDialog(false)} className='mx-2 px-4 py-2 bg-red-400 hover:bg-red-500 
                            transition-all text-white rounded-md shadow-md'>No</button>
                        </div>
                    </div>
                </Dialog>
            </td>
        </tr>
    )
};

export default VeriProductos

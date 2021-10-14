import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; //para las alertas
import 'react-toastify/dist/ReactToastify.css';
import { obtenerProductos, actualizarProducto, eliminarProducto } from 'utils/api/apiProductos';
import { nanoid } from 'nanoid';
import { Tooltip } from '@material-ui/core';
import Dialog from '@mui/material/Dialog';

const VeriProductos = () => {

    const [productos, setProductos] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    const [mostarTable, setMostrarTable] = useState(false);
    const [busqueda, setBusqueda] = useState('');

    // ue2> si ejecutarconsulta === true llama la funcion obtener productos que trae toda la info de db
    // asigna nuevamente la variable ejecutarconsulta en false
    useEffect(() => {
        // FUNCION PARA EL GET EN UTILS/API MANDA DOS CALBACKS PARA LOS ESTADOS SUCCESS Y ERROR
        console.log('consulta', ejecutarConsulta);
        if (ejecutarConsulta) {
            obtenerProductos(
                (response) => {
                    setProductos(response.data);
                },
                (error) => {
                    console.error(error);
                });
            setEjecutarConsulta(false);
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
                <Link to='/admin/productos/' className='btnGeneralNav'><i className="fas fa-arrow-left"></i></Link>
            </div>
            <div className='h-full pt-10'>
                <h1 className='tituloGeneral'>Administrador de Productos</h1>
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
                                <span>{producto._id}</span>
                                <span>{producto.descripcion}</span>
                                <span>{producto.valorUnitario}</span>
                                <span>{producto.estado}</span>
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
        descripcion: producto.descripcion,
        valorUnitario: producto.valorUnitario,
        estado: producto.estado,
    });

    return (
        <tr>
            {edit ? (
                <>
                    <td>{infoNuevoProducto._id}</td>
                    <td>
                        <input className='inputGeneral' type="text" value={infoNuevoProducto.descripcion}
                            onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, descripcion: e.target.value })} />
                    </td>
                    <td><input className='inputGeneral' type="text" value={infoNuevoProducto.valorUnitario}
                        onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, valorUnitario: e.target.value })} />
                    </td>
                    <td>
                        <select className='inputGeneral' defaultValue={infoNuevoProducto.estado}
                            onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, estado: e.target.value })}>
                            <option disabled>Seleccione...</option>
                            <option value="Disponible">Disponible</option>
                            <option value="No Disponible">No Disponible</option>
                        </select>
                    </td>
                </>

            ) : (
                <>
                    <td>{producto._id}</td>
                    <td>{producto.descripcion}</td>
                    <td>{producto.valorUnitario}</td>
                    <td>{producto.estado}</td>
                </>
            )}
            <td>
                <div className='flex w-full justify-evenly'>
                    {edit ? (
                        <>
                            <Tooltip title='Confirmar Edición' arrow placement='bottom'>
                                <button type='submit'>
                                    <i onClick={() => actualizarProducto(producto._id, infoNuevoProducto,

                                        (response) => {
                                            console.log(response.data);
                                            toast.success('Producto modificado con éxito');
                                            setEdit(false);
                                            setEjecutarConsulta(true);
                                        },

                                        (error) => {
                                            toast.error('Error modificando el producto');
                                            console.error(error);
                                        }

                                    )} className='fas fa-check p-2 border-2 border-green-300 rounded-md 
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

                            <i onClick={() => setEdit(!edit)} className='fas fa-pencil-alt p-2 border-2 border-gray-300 rounded-md 
                                text-yellow-600 hover:text-yellow-800 hover:bg-green-500 hover:bg-opacity-20 hover:border-green-100-100
                                transition-all'></i>


                            <i onClick={() => setOpenDialog(true)} className='fas fa-trash p-2 border-2 border-red-300 rounded-md
                                text-red-600 hover:text-red-700 hover:bg-green-500 hover:bg-opacity-20 hover:border-red-100
                                transition-all'></i>

                        </>
                    )}

                </div>
                <Dialog open={openDialog}>
                    <div className='flex flex-col p-8 bg-gray-200 shadow-md rounded-sm'>
                        <h1 className='text-gray-900 text-lg font-medium'>¿Está seguro de querer eliminar este producto?</h1>
                        <div className='flex w-full items-center justify-center mt-4'>
                            <button onClick={() => eliminarProducto(producto._id,

                                (response) => {
                                    console.log(response.data);
                                    setEjecutarConsulta(true);
                                    toast.success('vehículo eliminado con éxito');
                                },

                                (error) => {
                                    console.error(error);
                                    toast.error('Error eliminando el vehículo');
                                })

                            } className='mx-2 px-4 py-2 bg-green-400 hover:bg-green-500 
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

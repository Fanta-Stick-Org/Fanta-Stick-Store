import React, { useState, useEffect, useRef } from 'react'
import 'styles/list.css'
import axios from 'axios'
import { nanoid } from 'nanoid';
import { Tooltip } from '@material-ui/core';
import Dialog from '@mui/material/Dialog';

const VeriProductos = () => {

    const [productos, setProductos] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

    useEffect(() => {
        const obtenerProductos = async () => {
            const options = { method: 'GET', url: 'https://vast-waters-45728.herokuapp.com/vehicle/' }; //https://vast-waters-45728.herokuapp.com/vehicle/ db profe
            await axios
                .request(options)
                .then(function (response) {
                    setProductos(response.data);
                })
                .catch(function (error) {
                    console.error(error);
                });
        };

        if (ejecutarConsulta) {
            obtenerProductos();
            setEjecutarConsulta(false);
        }
    }, [ejecutarConsulta])

    const [mostarTable, setMostrarTable] = useState(false);

    useEffect(() => {
        if (mostarTable) {
            setEjecutarConsulta(true)
        }
    }, [mostarTable])

    const [busqueda, setBusqueda] = useState('');

    return (
        <>
            <div className='px-6'>
                <a href='/admin/productos' className='btnGeneralNav'><i className="fas fa-arrow-left"></i></a>
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
                    <TablaProductos listaProductos={productos} setEjecutarConsulta={setEjecutarConsulta} busqueda={busqueda} />
                }
            </div>
        </>
    )
}

const TablaProductos = ({ listaProductos, setEjecutarConsulta, busqueda }) => {
    const form = useRef(null);

    useEffect(() => {
        console.log('listado de productos', listaProductos);
    }, [listaProductos]);

    useEffect(() => {
        console.log('busqueda', busqueda)
        console.log('lista productos comp', listaProductos )
        console.log('lista productos filtrada', listaProductos.filter((elemento) => {
            console.log('elemento', elemento)
            return elemento.name.includes(busqueda);
        })) 
    }, [busqueda])

    const submitEdit = async (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

        const editProducto = {};
        formData.forEach((value, key) => {
            editProducto[key] = value;
        });

        console.log('mensaje e', e);
        //request para el patch en db
        //en el funcion response debe ir el toast y el setEjecutarConsulta(true)
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='table-container'>
                <form ref={form} onSubmit={submitEdit}>
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
                            {listaProductos.map((producto) => {
                                return (
                                    <FilaProducto key={nanoid()} producto={producto} setEjecutarConsulta={setEjecutarConsulta} />
                                )
                            })}
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
};

const FilaProducto = (producto, setEjecutarConsulta) => {

    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const eliminarProducto = async () => {
        //request para delete en db
        //en el funcion response debe ir el toast y el setEjecutarConsulta(true)
        //despues del axios setOpedDialog(false);
    }
    return (
        <tr>
            {edit ? (
                <>
                    <td><input className='inputGeneral' type="text" defaultValue={producto.idProducto} disabled /></td>
                    <td><input className='inputGeneral' type="text" defaultValue={producto.descripcion} /></td>
                    <td><input className='inputGeneral' type="text" defaultValue={producto.valorUnitario} /></td>
                    <td><input className='inputGeneral' type="text" defaultValue={producto.estado} /></td>
                </>

            ) : (
                <>
                    <td>{producto.idProducto}</td>
                    <td>{producto.descripcion}</td>
                    <td>{producto.valorUnitario}</td>
                    <td>{producto.estado}</td>
                </>
            )}
            {/* <td><Link to={`/admin/productos/actualizar/${producto.idProducto}`}>Actualizar</Link></td> */}
            <td>
                <div className='flex w-full justify-evenly'>
                    {edit ? (
                        <>
                            <Tooltip title='Confirmar Edición' arrow placement='bottom'>
                                <button type='submit'>
                                    <i onClick={() => setEdit(!edit)} className='fas fa-check p-2 border-2 border-green-300 rounded-md 
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
                    {/* <a href={`/admin/productos/actualizar/${producto.idProducto}`} className='linkGeneralList'><i className='fas fa-pencil-alt'></i></a>
                                            <a href={`/admin/productos/actualizar/${producto.idProducto}`} className='linkGeneralList text-red-600'><i className='fas fa-trash'></i></a> */}
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
}

export default VeriProductos

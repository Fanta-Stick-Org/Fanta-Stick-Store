import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; //para las alertas
import 'react-toastify/dist/ReactToastify.css';
import { obtenerVentas, actualizarVenta, eliminarVenta } from 'utils/api/apiVentas';
import { nanoid } from 'nanoid';
import { Tooltip } from '@material-ui/core';
import Dialog from '@mui/material/Dialog';

const VeriUsers = () => {

    const [ventas, setVentas] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    const [mostarTable, setMostrarTable] = useState(false);
    const [busqueda, setBusqueda] = useState('');

    // ue2> si ejecutarconsulta === true llama la funcion obtener ventas que trae toda la info de db
    // asigna nuevamente la variable ejecutarconsulta en false
    useEffect(() => {
        // FUNCION PARA EL GET EN UTILS/API
        console.log('consulta', ejecutarConsulta);
        if (ejecutarConsulta) {
            obtenerVentas(
                (response) => {
                    setVentas(response.data);
                },

                (error) => {
                    console.error(error);
                }
            );
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
                <Link to='/admin/ventas' className='btnGeneralNav'><i className="fas fa-arrow-left"></i></Link>
            </div>
            <div className='h-full pt-10'>
                <h1 className='tituloGeneral'>Administrador de Ventas</h1>
                <div className="flex items-center justify-center justify-items-start p-2">
                    <input className="inputGeneralList" onChange={(e) => setBusqueda(e.target.value)} value={busqueda} type="=text" name="" placeholder="Buscar" />
                    <div className="flex items-center justify-items-end pl-2">
                        <button className='btnGeneralList' onClick={() => setMostrarTable(!mostarTable)}><i className="fas fa-search"></i></button>
                    </div>
                </div>
                {mostarTable &&
                    <TablaVentas listaVentas={ventas} setEjecutarConsulta={setEjecutarConsulta}
                        busqueda={busqueda} />
                }
                <ToastContainer position="bottom-right" autoClose={4000} closeOnClick />
            </div>
        </>
    )
};

const TablaVentas = ({ listaVentas, setEjecutarConsulta, busqueda }) => {
    const [ventasFilter, setVentasFilter] = useState(listaVentas);

    //reacciona al cambio en poductosFilter convierte el objeto listaVentas en un string
    //y muestra el la coincidencia con busqueda que viene como prop de veriventas
    useEffect(() => {
        setVentasFilter(
            listaVentas.filter((elemento) => {
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            }));
        //console.log('filtro', ventasFilter) // muestra el array filtrado COMENTAR
    }, [busqueda, listaVentas])

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='table-container'>
                <div className='hidden md:block'>
                    <table id="table-list">
                        <thead>
                            <tr>
                                <th>Id Venta</th>
                                <th>Fecha Venta</th>
                                <th>Vendedor</th>
                                <th>Estado Venta</th>
                                <th>Id cliente</th>
                                <th>Nombre cliente</th>
                                <th>Descripción</th>
                                <th>Cantidad</th>
                                <th>Total Venta</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ventasFilter.map((venta) => {
                                return (
                                    <Filaventa key={nanoid()} venta={venta} setEjecutarConsulta={setEjecutarConsulta} />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='flex flex-col w-full m-2 md:hidden'>
                    {ventasFilter.map((venta) => {
                        return (
                            <div key={nanoid()} className='bg-green-400 hover:bg-gray-400 m-2 shadow-xl flex flex-col p-2 rounded-xl'>
                                <span>{venta._id}</span>
                                <span>{venta.fechaVenta}</span>
                                <span>{venta.vendedor.name}</span>
                                <span>{venta.estadoVenta}</span>
                                <span>{venta.idCliente}</span>
                                <span>{venta.nameCliente}</span>
                                <span>{venta.descripcion.descripcion}</span>
                                <span>{venta.cantidad}</span>
                                <span>{venta.valorTotal}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

const Filaventa = ({ venta, setEjecutarConsulta }) => {

    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [infoNuevaVenta, setInfoNuevaVenta] = useState({
        _id: venta._id,
        fechaVenta: venta.fechaVenta,
        vendedor: venta.vendedor,
        estadoVenta: venta.estadoVenta,
        idCliente: venta.idCliente,
        nameCliente: venta.nameCliente,
        descripcion: venta.descripcion,
        cantidad: venta.cantidad,
        valorTotal: venta.valorTotal
    });

    return (
        <tr>
            {edit ? (
                <>
                    <td>{infoNuevaVenta._id}</td>
                    <td><input className='inputGeneral' type="date" value={infoNuevaVenta.fechaVenta}
                        onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, fechaVenta: e.target.value })} disabled /></td>
                    <td><input className='inputGeneral' type="text" value={infoNuevaVenta.vendedor.name}
                        onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, vendedor: e.target.value })} disabled /></td>
                    <td>
                        <select className='inputGeneral' defaultValue={infoNuevaVenta.estadoVenta}
                            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, estadoVenta: e.target.value })}>
                            <option disabled>Seleccione...</option>
                            <option value="En proceso">En proceso</option>
                            <option value="Entragada">Entragada</option>
                            <option value="Cancelada">Cancelada</option>
                        </select>
                    </td>
                    <td><input className='inputGeneral' type="text" value={infoNuevaVenta.idCliente}
                        onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, idCliente: e.target.value })} /></td>
                    <td><input className='inputGeneral' type="text" value={infoNuevaVenta.nameCliente}
                        onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, nameCliente: e.target.value })} /></td>
                    <td><input className='inputGeneral' type="text" value={infoNuevaVenta.descripcion.descripcion}
                        onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, descripcion: e.target.value })} disabled /></td>
                    <td><input className='inputGeneral' type="number" value={infoNuevaVenta.cantidad}
                        onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, cantidad: e.target.value })} /></td>
                    <td><input className='inputGeneral' type="number" value={infoNuevaVenta.valorTotal}
                        onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, valorTotal: e.target.value })} /></td>
                </>

            ) : (
                <>
                    <td>{venta._id}</td>
                    <td>{venta.fechaVenta}</td>
                    <td>{venta.vendedor.name}</td>
                    <td>{venta.estadoVenta}</td>
                    <td>{venta.idCliente}</td>
                    <td>{venta.nameCliente}</td>
                    <td>{venta.descripcion.descripcion}</td>
                    <td>{venta.cantidad}</td>
                    <td>{venta.valorTotal}</td>
                </>
            )}
            {/* <td><Link to={`/admin/ventas/actualizar/${venta.idventa}`}>Actualizar</Link></td> */}
            <td>
                <div className='flex w-full justify-evenly'>
                    {edit ? (
                        <>
                            <Tooltip title='Confirmar Edición' arrow placement='bottom'>
                                <button type='submit'>
                                    <i onClick={() => actualizarVenta(venta._id, infoNuevaVenta,

                                        (response) => {
                                            console.log(response.data);
                                            toast.success('Venta modificado con éxito');
                                            setEdit(false);
                                            setEjecutarConsulta(true);
                                        },

                                        (error) => {
                                            toast.error('Error modificando el venta');
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
                            <Tooltip title='Editar venta' arrow placement='bottom'>
                                <i onClick={() => setEdit(!edit)} className='fas fa-pencil-alt p-2 border-2 border-gray-300 rounded-md 
                                text-yellow-600 hover:text-yellow-800 hover:bg-green-500 hover:bg-opacity-20 hover:border-green-100-100
                                transition-all'></i>
                            </Tooltip>
                            <Tooltip title='Eliminar venta' arrow placement='bottom'>
                                <i onClick={() => setOpenDialog(true)} className='fas fa-trash p-2 border-2 border-red-300 rounded-md
                                text-red-600 hover:text-red-700 hover:bg-green-500 hover:bg-opacity-20 hover:border-red-100
                                transition-all'></i>
                            </Tooltip>
                        </>
                    )}

                </div>
                <Dialog open={openDialog}>
                    <div className='flex flex-col p-8 bg-gray-200 shadow-md rounded-sm'>
                        <h1 className='text-gray-900 text-lg font-medium'>¿Está seguro de querer eliminar este venta?</h1>
                        <div className='flex w-full items-center justify-center mt-4'>
                            <button onClick={() => eliminarVenta(venta._id,

                                (response) => {
                                    console.log(response.data);
                                    setEjecutarConsulta(true);
                                    toast.success('Venta eliminado con éxito');
                                },

                                (error) => {
                                    console.error(error);
                                    toast.error('Error eliminando el venta');
                                }

                            )} className='mx-2 px-4 py-2 bg-green-400 hover:bg-green-500 
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

export default VeriUsers

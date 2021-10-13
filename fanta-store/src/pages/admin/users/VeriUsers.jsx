import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; //para las alertas
import 'react-toastify/dist/ReactToastify.css';
import { obtenerUsuarios } from 'utils/apiUsuarios';
import { nanoid } from 'nanoid';
import { Tooltip } from '@material-ui/core';
import Dialog from '@mui/material/Dialog';
import { eliminarUsuario } from 'utils/apiUsuarios';
import { actualizarUsuario } from 'utils/apiUsuarios';

const VeriUsers = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    const [mostarTable, setMostrarTable] = useState(false);
    const [busqueda, setBusqueda] = useState('');

    // ue2> si ejecutarconsulta === true llama la funcion obtener usuarios que trae toda la info de db
    // asigna nuevamente la variable ejecutarconsulta en false
    useEffect(() => {
        // FUNCION PARA EL GET EN UTILS/API
        console.log('consulta', ejecutarConsulta);
        if (ejecutarConsulta) {
            obtenerUsuarios(setUsuarios, setEjecutarConsulta);
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
                <Link to='/admin' className='btnGeneralNav'><i className="fas fa-arrow-left"></i></Link>
            </div>
            <div className='h-full pt-10'>
                <h1 className='tituloGeneral'>Administrador de Usuarios</h1>
                <div className="flex items-center justify-center justify-items-start p-2">
                    <input className="inputGeneralList" onChange={(e) => setBusqueda(e.target.value)} value={busqueda} type="=text" name="" placeholder="Buscar" />
                    <div className="flex items-center justify-items-end pl-2">
                        <button className='btnGeneralList' onClick={() => setMostrarTable(!mostarTable)}><i className="fas fa-search"></i></button>
                    </div>
                </div>
                {mostarTable &&
                    <TablaUsuarios listaUsuarios={usuarios} setEjecutarConsulta={setEjecutarConsulta}
                        busqueda={busqueda} />
                }
                <ToastContainer position="bottom-right" autoClose={4000} closeOnClick />
            </div>
        </>
    )
};

const TablaUsuarios = ({ listaUsuarios, setEjecutarConsulta, busqueda }) => {
    const [usuariosFilter, setUsuariosFilter] = useState(listaUsuarios);

    //reacciona al cambio en poductosFilter convierte el objeto listaUsuarios en un string
    //y muestra el la coincidencia con busqueda que viene como prop de veriusuarios
    useEffect(() => {
        setUsuariosFilter(
            listaUsuarios.filter((elemento) => {
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            }));
        //console.log('filtro', usuariosFilter) // muestra el array filtrado COMENTAR
    }, [busqueda, listaUsuarios])

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='table-container'>
                <div className='hidden md:block'>
                    <table id="table-list">
                        <thead>
                            <tr>
                                <th>Id Usuario</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Rol</th>
                                <th>Estado Usuario</th>
                                <th>Contraseña</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuariosFilter.map((usuario) => {
                                return (
                                    <Filausuario key={nanoid()} usuario={usuario} setEjecutarConsulta={setEjecutarConsulta} />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='flex flex-col w-full m-2 md:hidden'>
                    {usuariosFilter.map((usuario) => {
                        return (
                            <div key={nanoid()} className='bg-green-400 hover:bg-gray-400 m-2 shadow-xl flex flex-col p-2 rounded-xl'>
                                <span>{usuario._id}</span>
                                <span>{usuario.name}</span>
                                <span>{usuario.email}</span>
                                <span>{usuario.rol}</span>
                                <span>{usuario.estadoUsuario}</span>
                                <span>{usuario.password}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

const Filausuario = ({ usuario, setEjecutarConsulta }) => {

    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
        _id: usuario._id,
        name: usuario.name,
        email: usuario.email,
        rol: usuario.rol,
        estadoUsuario: usuario.estadoUsuario,
        password: usuario.password,
    });

    return (
        <tr>
            {edit ? (
                <>
                    <td>{infoNuevoUsuario._id}</td>
                    <td><input className='inputGeneral' type="text" value={infoNuevoUsuario.name}
                        onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, name: e.target.value })} /></td>
                    <td><input className='inputGeneral' type="email" value={infoNuevoUsuario.email}
                        onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, email: e.target.value })} /></td>
                    <td>
                        <select className='inputGeneral' defaultValue={infoNuevoUsuario.rol}
                            onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, rol: e.target.value })}>
                            <option disabled>Seleccione...</option>
                            <option value="Vendedor">Vendedor</option>
                            <option value="Administrador">Administrador</option>
                        </select>
                    </td>
                    <td>
                        <select className='inputGeneral' defaultValue={infoNuevoUsuario.estadoUsuario}
                            onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, estadoUsuario: e.target.value })}>
                            <option disabled>Seleccione...</option>
                            <option value="Pendiente">Pendiente</option>
                            <option value="Autorizado">Autorizado</option>
                            <option value="No autorizado">No autorizado</option>
                        </select>
                    </td>
                    <td><input className='inputGeneral' type="password" value={infoNuevoUsuario.password}
                        onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, password: e.target.value })} /></td>
                </>

            ) : (
                <>
                    <td>{usuario._id}</td>
                    <td>{usuario.name}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.rol}</td>
                    <td>{usuario.estadoUsuario}</td>
                    <td>{usuario.password}</td>
                </>
            )}
            {/* <td><Link to={`/admin/usuarios/actualizar/${usuario.idusuario}`}>Actualizar</Link></td> */}
            <td>
                <div className='flex w-full justify-evenly'>
                    {edit ? (
                        <>
                            <Tooltip title='Confirmar Edición' arrow placement='bottom'>
                                <button type='submit'>
                                    <i onClick={() => actualizarUsuario(infoNuevoUsuario, usuario ,setEjecutarConsulta, setEdit)} className='fas fa-check p-2 border-2 border-green-300 rounded-md 
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
                            <Tooltip title='Editar usuario' arrow placement='bottom'>
                                <i onClick={() => setEdit(!edit)} className='fas fa-pencil-alt p-2 border-2 border-gray-300 rounded-md 
                                text-yellow-600 hover:text-yellow-800 hover:bg-green-500 hover:bg-opacity-20 hover:border-green-100-100
                                transition-all'></i>
                            </Tooltip>
                            <Tooltip title='Eliminar usuario' arrow placement='bottom'>
                                <i onClick={() => setOpenDialog(true)} className='fas fa-trash p-2 border-2 border-red-300 rounded-md
                                text-red-600 hover:text-red-700 hover:bg-green-500 hover:bg-opacity-20 hover:border-red-100
                                transition-all'></i>
                            </Tooltip>
                        </>
                    )}

                </div>
                <Dialog open={openDialog}>
                    <div className='flex flex-col p-8 bg-gray-200 shadow-md rounded-sm'>
                        <h1 className='text-gray-900 text-lg font-medium'>¿Está seguro de querer eliminar este usuario?</h1>
                        <div className='flex w-full items-center justify-center mt-4'>
                            <button onClick={() => eliminarUsuario(usuario, setEjecutarConsulta)} className='mx-2 px-4 py-2 bg-green-400 hover:bg-green-500 
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

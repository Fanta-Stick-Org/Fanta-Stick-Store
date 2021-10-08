import React, { useState, useEffect } from 'react'

const VeriUsers = () => {

    /* const [mostarTable, setMostrarTable] = useState(false); */

    //json quemado usuarios
    const usuariosBack = [
        {
            idUsuario: 'google1',
            nombre: 'David Echavarria',
            email: 'davide@test.com',
            roles: 'Administrador',
            estado: 'Autorizado'
        },
        {
            idUsuario: 'google2',
            nombre: 'Kevin Baquero',
            email: 'ksbaquero@test.com',
            roles: 'Vendedor',
            estado: 'No autorizado'
        },
    ];

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        setUsuarios(usuariosBack); //se asigna el json a la variable usuarios
    }, [])

    return (
        <div className='h-full pt-10'>
            <h1 className='tituloGeneral'>Administrador de Usuarios</h1>
            <div className="flex items-center justify-center justify-items-start p-2">
                <input className="inputGeneralList" type="=text" name="" placeholder="Buscar" />
                <div className="flex items-center justify-items-end pl-2">
                    <button className='btnGeneralList' /* onClick={() => setMostrarTable(!mostarTable)} */><i class="fas fa-search"></i></button>
                </div>
            </div>
            <TablaUsuarios listaUsuarios = {usuarios}/>
            {/* {mostarTable &&
                <TablaUsuarios listaUsuarios = {usuarios}/>
            } */}
        </div>
    )
}

const TablaUsuarios = ({ listaUsuarios }) => {
    useEffect(() => {
        console.log('este es el listado de productos en el componente de tabla', listaUsuarios);
    }, [listaUsuarios]);
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='table-container'>
                <table id="table-list">
                    <thead>
                        <tr>
                            <th>Id Usuario</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Roles</th>
                            <th>Estado</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaUsuarios.map((usuario) => {
                            return (
                                <tr>
                                    <td>{usuario.idUsuario}</td>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.roles}</td>
                                    <td>{usuario.estado}</td>
                                    <td><a href='/admin/usuarios/actualizar' className='linkGeneral'>Actualizar</a></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default VeriUsers

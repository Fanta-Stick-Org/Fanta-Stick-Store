import React from 'react'

const VeriUsers = () => {
    return (
        <div className='h-full pt-10'>
            <h1 className='tituloGeneral'>Administrador de Usuarios</h1>
            <div className="flex items-center justify-center justify-items-start p-2">
                <input className="inputGeneralList" type="=text" name="" placeholder="Buscar" />
                <div className="flex items-center justify-items-end pl-2">
                    <button className='btnGeneralList'><i class="fas fa-search"></i></button>
                </div>
            </div>
            <div className='table-container'>
                <table id='table-list'>
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
                        <tr>
                            <td>1010101010</td>
                            <td>Kevin Baquero</td>
                            <td>bc@test.com</td>
                            <td>
                                <div>
                                    <label class="textoGeneral" for="roles"></label>
                                    <select class="inputGeneral" name="estado" type="text" id="roles" placeholder="">
                                        <option value="noAsignado">No asignado </option>
                                        <option value="vendedor">Vendedor </option>
                                        <option value="administrador">Administrador</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <label class="textoGeneral" for="estado"></label>
                                    <select class="inputGeneral" name="estado" type="text" id="estado" placeholder="">
                                        <option value="pendiente">Pendiente </option>
                                        <option value="no Autorizado">No autorizado</option>
                                        <option value="autorizado">Autorizado</option>
                                    </select>
                                </div>
                            </td>
                            <td><a href='/admin/usuarios/actualizar' className='linkGeneral'>Actualizar</a></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <div>
                                    <label class="textoGeneral" for="roles"></label>
                                    <select class="inputGeneral" name="estado" type="text" id="roles" placeholder="">
                                        <option value="noAsignado">No asignado </option>
                                        <option value="vendedor">Vendedor </option>
                                        <option value="administrador">Administrador</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <label class="textoGeneral" for="estado"></label>
                                    <select class="inputGeneral" name="estado" type="text" id="estado" placeholder="">
                                        <option value="pendiente">Pendiente </option>
                                        <option value="no Autorizado">No autorizado</option>
                                        <option value="autorizado">Autorizado</option>
                                    </select>
                                </div>
                            </td>
                            <td><a href='/admin/usuarios/actualizar' className='linkGeneral'>Actualizar</a></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <div>
                                    <label class="textoGeneral" for="roles"></label>
                                    <select class="inputGeneral" name="estado" type="text" id="roles" placeholder="">
                                        <option value="noAsignado">No asignado </option>
                                        <option value="vendedor">Vendedor </option>
                                        <option value="administrador">Administrador</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <label class="textoGeneral" for="estado"></label>
                                    <select class="inputGeneral" name="estado" type="text" id="estado" placeholder="">
                                        <option value="pendiente">Pendiente </option>
                                        <option value="no Autorizado">No autorizado</option>
                                        <option value="autorizado">Autorizado</option>
                                    </select>
                                </div>
                            </td>
                            <td><a href='/admin/usuarios/actualizar' className='linkGeneral'>Actualizar</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VeriUsers

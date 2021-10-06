import React from 'react'
import 'styles/list.css'

const VeriProductos = () => {
    return (
        <div className='h-full pt-10'>
            <h1 className='tituloGeneral'>Administrador de productos</h1>
            <div className="grid grid-flow-col-dense items-center justify-center">
                <input className="inputGeneral" type="=text" name="" placeholder="Buscar" />
                <button className='btnGeneral'><i class="fas fa-search"></i></button>
            </div>
            <div className='table-container'>
                <table id='table-list'>
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
                        <tr>
                            <td>001</td>
                            <td>Mouse Inalámbrico</td>
                            <td>$120.000</td>
                            <td>
                                <div>
                                    <label class="textoGeneral" for="estado"></label>
                                    <select class="inputGeneral" name="estado" type="text" id="estado" placeholder="Ej: 001">
                                        <option value="disponible">Disponible</option>
                                        <option value="noDisponible">No Disponible</option>
                                    </select>
                                </div>
                            </td>
                            <td><a href='/admin/productos/actualizar' className='linkGeneral'>Actualizar</a></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <div>
                                    <label className="textoGeneral" for="estado"></label>
                                    <select className="inputGeneral" name="estado" type="text" id="estado" placeholder="Ej: 001">
                                        <option value="disponible">Disponible</option>
                                        <option value="noDisponible">No Disponible</option>
                                    </select>
                                </div>
                            </td>
                            <td><a href='/admin/productos/actualizar' className='linkGeneral'>Actualizar</a></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <div>
                                    <label className="textoGeneral" for="estado"></label>
                                    <select className="inputGeneral" name="estado" type="text" id="estado" placeholder="Ej: 001">
                                        <option value="disponible">Disponible</option>
                                        <option value="noDisponible">No Disponible</option>
                                    </select>
                                </div>
                            </td>
                            <td><a href='/admin/productos/actualizar' className='linkGeneral'>Actualizar</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VeriProductos

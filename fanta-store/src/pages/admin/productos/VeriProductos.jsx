import React, {useState} from 'react'
import 'styles/list.css'

const VeriProductos = () => {

    const [mostarTable, setMostrarTable] = useState(false);
    return (
        <div className='h-full pt-10'>
            <h1 className='tituloGeneral'>Administrador de productos</h1>
            <div className="flex items-center justify-center justify-items-start p-2">
                <input className="inputGeneralList" type="=text" name="" placeholder="Buscar" />
                <div className="flex items-center justify-items-end pl-2">
                    <button className='btnGeneralList' onClick={()=>setMostrarTable(!mostarTable)}><i class="fas fa-search"></i></button>
                </div>
            </div>
            {mostarTable &&
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
                                            <option value="seleccione">Seleccione...</option>
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
                                            <option value="seleccione">Seleccione...</option>
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
                                        <select className="inputGeneral" name="estado" type="text" id="estado" placeholder="">
                                            <option value="seleccione">Seleccione...</option>
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
            }
        </div>
    )
}

export default VeriProductos

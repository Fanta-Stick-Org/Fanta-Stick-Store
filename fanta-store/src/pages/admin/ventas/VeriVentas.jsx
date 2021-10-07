import React, { useState } from 'react'

const VeriVentas = () => {

    const [mostarTable, setMostrarTable] = useState(false);
    return (
        <div className='h-full pt-10'>
            <h1 className='tituloGeneral'>Administrador de Ventas</h1>
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
                                <th>Id de venta</th>
                                <th >Fecha de venta</th>
                                <th>Documento Cliente</th>
                                <th>Nombre Cliente</th>
                                <th>Estado de la Venta</th>
                                <th>Total de la Venta</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1023</td>
                                <td>03/10/2021 06:00</td>
                                <td>1101010101</td>
                                <td>Martín Rivera</td>
                                <td>
                                    <div>
                                        <label class="textoGeneral" for="estado"></label>
                                        <select class="inputGeneral" name="estado" type="text" id="estado" placeholder="">
                                            <option value="disponible">En proceso </option>
                                            <option value="noDisponible">Cancelada</option>
                                            <option value="noDisponible">Entregada</option>
                                        </select>
                                    </div>
                                </td>
                                <td>350000</td>
                                <td><a href='/admin/productos/actualizar' className='linkGeneral'>Actualizar</a></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div>
                                        <label class="textoGeneral" for="estado"></label>
                                        <select class="inputGeneral" name="estado" type="text" id="estado" placeholder="">
                                            <option value="disponible">En proceso </option>
                                            <option value="noDisponible">Cancelada</option>
                                            <option value="noDisponible">Entregada</option>
                                        </select>
                                    </div>
                                </td>
                                <td></td>
                                <td><a href='/admin/productos/actualizar' className='linkGeneral'>Actualizar</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }

        </div>
    )
}

export default VeriVentas

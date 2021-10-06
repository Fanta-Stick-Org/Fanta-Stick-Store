import React from 'react'
import 'styles/list.css'

const ListVentas = () => {
    return (
        <div className='h-full pt-10'>
            <h1 className="tituloGeneral">Listado de Ventas</h1>
            <div className="flex items-center justify-between justify-items-end p-2 pb-6">
                <button value="list" id="btn-list-submit" type="submit" className='btnGeneralList'>Listar</button>
                <div className="flex items-center justify-items-end p-2">
                    <input type="text" id="totalSale" name="totalSale" value="100.000" className="inputGeneralList" readOnly placeholder="Total Venta"></input>
                    <span className='textoForm'>Total Venta</span>
                </div>
            </div>
            <div className='table-container'>
                <table id="table-list">
                    <thead>
                        <tr>
                            <th>Codigo del Producto</th>
                            <th>Descripción del Producto</th>
                            <th>Cantidad</th>
                            <th>Precio Unitario</th>
                            <th>Precio Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>Mouse Inalámbrico</td>
                            <td>1</td>
                            <td>$120.000</td>
                            <td>$120.000</td>
                        </tr>
                        <tr>
                            <td>002</td>
                            <td>Monitor 1920x1080</td>
                            <td>2</td>
                            <td>$410.000</td>
                            <td>$820.000</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListVentas

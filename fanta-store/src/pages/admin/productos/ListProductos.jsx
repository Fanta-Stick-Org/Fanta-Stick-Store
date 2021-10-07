import React, { useState } from 'react'
import 'styles/list.css'

const ListProductos = () => {

    const [mostarTable, setMostrarTable] = useState(false);
    return (
        <div className='h-full pt-10'>
            <h1 className="tituloGeneral">Listado de Productos</h1>
            <div className="flex items-center justify-between justify-items-end pt-2">
                <button value="list" id="btn-list-submit" type="submit" className='btnGeneral' onClick={()=>setMostrarTable(!mostarTable)}>Listar</button>
            </div>

            {mostarTable &&
                <div className='table-container'>
                    <table id="table-list">
                        <thead>
                            <tr>
                                <th>Id Producto</th>
                                <th>Descripción</th>
                                <th>Valor Unitario</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>001</td>
                                <td>Monitor 1920x1080</td>
                                <td>$410.000</td>
                                <td>No Disponible</td>
                            </tr>
                            <tr>
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
                            </tr><tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }

        </div>
    )
}

export default ListProductos

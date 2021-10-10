import React, { useState, useEffect } from 'react'
import 'styles/list.css'
import { nanoid } from 'nanoid';
import 'react-toastify/dist/ReactToastify.css';
import { obtenerProductos } from 'utils/api';

const ListProductos = () => {

    const [mostarTable, setMostrarTable] = useState(false);
    const [productos, setProductos] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

    useEffect(() => {
        // FUNCION PARA EL GET EN UTILS/API
        if (mostarTable) {
            obtenerProductos(setProductos, setEjecutarConsulta);
        }
    }, [mostarTable])

    return (
        <>
            <div className='px-6'>
                <a href='/admin/productos/' className='btnGeneralNav'><i className="fas fa-arrow-left"></i></a>
            </div>
            <div className='w-full h-full pt-10'>
                <h1 className="tituloGeneral">Listado de Productos</h1>
                <div className="flex items-center justify-center pt-2">
                    <button value="list" id="btn-list-submit" type="submit" className='btnGeneral' 
                    onClick={() => setMostrarTable(!mostarTable)}>Listar</button>
                </div>
                {mostarTable &&
                    <TablaProductos listaProductos={productos} />
                }
            </div>
        </>
    )
}

const TablaProductos = ({ listaProductos }) => {
    useEffect(() => {
        console.log('listado de productos', listaProductos);
    }, [listaProductos]);
    return (
        <div className='flex flex-col sm:flex-row flex-nowrap items-center justify-center w-full'>
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
                        {listaProductos.map((producto) => {
                            return (
                                <tr key={nanoid()}>
                                    <td>{producto.name}</td>
                                    <td>{producto.brand}</td>
                                    <td>{producto.model}</td>
                                    <td>{producto.created}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListProductos

import React, { useState, useEffect } from 'react'
import 'styles/list.css'
import axios from 'axios'

const ListProductos = () => {

    const [mostarTable, setMostrarTable] = useState(false);

    useEffect(() => {
        console.log(mostarTable)
    }, [mostarTable])

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const obtenerProductos = async () => {
            const options = { method: 'GET', url: '' };
            await axios
                .request(options)
                .then(function (response) {
                    setProductos(response.data);
                })
                .catch(function (error) {
                    console.error(error);
                });
        };
        if (mostarTable) {
            obtenerProductos();
        }
    }, [mostarTable])

    return (
        <>
            <div className='px-6'>
                <a href='/admin/productos' className='btnGeneralNav'><i className="fas fa-arrow-left"></i></a>
            </div>
            <div className='h-full pt-10'>
                <h1 className="tituloGeneral">Listado de Productos</h1>
                <div className="flex items-center justify-center pt-2">
                    <button value="list" id="btn-list-submit" type="submit" className='btnGeneral' onClick={() => setMostrarTable(!mostarTable)}>Listar</button>
                </div>
                {/* <TablaProductos listaProductos={productos}/> */}
                {mostarTable &&
                    <TablaProductos listaProductos={productos} />
                }
            </div>
        </>
    )
}

const TablaProductos = ({ listaProductos }) => {
    useEffect(() => {
        console.log('este es el listado de productos en el componente de tabla', listaProductos);
    }, [listaProductos]);
    return (
        <div className='flex flex-col sm:flex-row flex-nowrap items-center justify-center'>
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
                                <tr>
                                    <td>{producto.idProducto}</td>
                                    <td>{producto.descripcion}</td>
                                    <td>{producto.valorUnitario}</td>
                                    <td>{producto.estado}</td>
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

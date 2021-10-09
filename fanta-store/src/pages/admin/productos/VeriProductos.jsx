import React, { useState, useEffect} from 'react'
import 'styles/list.css'
import axios from 'axios'

const VeriProductos = () => {

    const [mostarTable, setMostrarTable] = useState(false);


    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const obtenerProductos = async () => {
            const options = { method: 'GET', url: '' }; //https://vast-waters-45728.herokuapp.com/vehicle/ db profe
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
                <h1 className='tituloGeneral'>Administrador de productos</h1>
                <div className="flex items-center justify-center justify-items-start p-2">
                    <input className="inputGeneralList" type="=text" name="" placeholder="Buscar" />
                    <div className="flex items-center justify-items-end pl-2">
                        <button className='btnGeneralList' onClick={() => setMostrarTable(!mostarTable)}><i class="fas fa-search"></i></button>
                    </div>
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
        console.log('este es el listado de productos en el componente de tabla', listaProductos);
    }, [listaProductos]);
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='table-container'>
                <table id="table-list">
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
                        {listaProductos.map((producto) => {
                            return (
                                <tr>
                                    <td>{producto.idProducto}</td>
                                    <td>{producto.descripcion}</td>
                                    <td>{producto.valorUnitario}</td>
                                    <td>{producto.estado}</td>
                                    {/* <td><Link to={`/admin/productos/actualizar/${producto.idProducto}`}>Actualizar</Link></td> */}
                                    <td><a href={`/admin/productos/actualizar/${producto.idProducto}`} className='linkGeneral'>Actualizar</a></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VeriProductos

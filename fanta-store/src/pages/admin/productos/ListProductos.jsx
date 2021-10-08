import React, { useState, useEffect } from 'react'
import 'styles/list.css'

const ListProductos = () => {

    const [mostarTable, setMostrarTable] = useState(false);

    //json quemado productos
    const productosBack = [
        {
            idProducto: '001',
            descripcion: 'Computador Portátil LENOVO 14',
            valorUnitario: 2299000,
            estado: 'Disponible'
        },
        {
            idProducto: '002',
            descripcion: 'Computador Portatil HP 14',
            valorUnitario: 1699000,
            estado: 'No Disponible'
        },
        {
            idProducto: '003',
            descripcion: 'Computador Portátil ACER 15.6',
            valorUnitario: 1815000,
            estado: 'Disponible'
        },
        {
            idProducto: '004',
            descripcion: 'Computador Portátil ASUS 14',
            valorUnitario: 1049000,
            estado: 'No Disponible'
        },
        {
            idProducto: '005',
            descripcion: 'iMac 21.5" Retina 4K 3.0Ghz',
            valorUnitario: 5999000,
            estado: 'Disponible'
        },
        {
            idProducto: '006',
            descripcion: 'Tablet LENOVO 10',
            valorUnitario: 789000,
            estado: 'Disponible'
        },
        {
            idProducto: '007',
            descripcion: 'Tablet SAMSUNG 10.4',
            valorUnitario: 699000,
            estado: 'Disponible'
        },
        {
            idProducto: '008',
            descripcion: 'Monitor HP 21.5',
            valorUnitario: 521000,
            estado: 'Disponible'
        },
        {
            idProducto: '009',
            descripcion: 'Monitor ACER Gamer 27',
            valorUnitario: 1199000,
            estado: 'Disponible'
        },
        {
            idProducto: '010',
            descripcion: 'Combo LOGITECH Teclado + Mouse',
            valorUnitario: 89900,
            estado: 'No Disponible'
        },
    ];

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos(productosBack); //se asigna el json a la variable productos
    }, [])

    return (
        <div className='h-full pt-10'>
            <h1 className="tituloGeneral">Listado de Productos</h1>
            <div className="flex items-center justify-between justify-items-end pt-2">
                <button value="list" id="btn-list-submit" type="submit" className='btnGeneral' onClick={() => setMostrarTable(!mostarTable)}>Listar</button>
            </div>
            {mostarTable &&
                <TablaProductos listaProductos={productos} />
            }
        </div>
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

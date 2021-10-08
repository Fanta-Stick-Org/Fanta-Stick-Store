import React, { useEffect, useState } from 'react'
import 'styles/list.css'

const ListVentas = () => {


    //json quemado productos
    const ventasBack = [
        {
            idProducto: '001',
            descripcion: 'Computador Portátil LENOVO 14',
            cantidad: 1,
            valorUnitario: 2299000,
            valorTotal: 2299000,
        },
        {
            idProducto: '002',
            descripcion: 'Computador Portatil HP 14',
            cantidad: 2,
            valorUnitario: 1699000,
            valorTotal: 3398000,
        },
    ];

    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        setVentas(ventasBack); //se asigna el json a la variable productos
    }, [])

    return (
        <>
            <div className='px-6'>
                <a href='/admin/ventas' className='btnGeneralNav'><i class="fas fa-arrow-left"></i></a>
            </div>
            <div className='h-full pt-10'>
                <h1 className="tituloGeneral">Listado de Ventas</h1>
                <div className="flex items-center justify-center p-2 pb-6">
                    <button value="list" id="btn-list-submit" type="submit" className='btnGeneralList'>Listar</button>
                    <div className="flex items-center justify-items-end p-2">
                        <input type="text" id="totalSale" name="totalSale" value="100.000" className="inputGeneralList" readOnly placeholder="Total Venta"></input>
                        <span className='textoForm'>Total Venta</span>
                    </div>
                </div>
                <TablaVentas ListVentas={ventas} />
            </div>
        </>
    )
}

const TablaVentas = ({ ListVentas }) => {
    useEffect(() => {
        console.log('este es el listado de productos en el componente de tabla', ListVentas);
    }, [ListVentas]);
    return (
        <div className='flex flex-col sm:flex-row flex-nowrap items-center justify-center'>
            <div className='table-container'>
                <table id="table-list">
                    <thead>
                        <tr>
                            <th>Id del Producto</th>
                            <th>Descripción</th>
                            <th>Cantidad</th>
                            <th>Valor Unitario</th>
                            <th>Valor Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListVentas.map((venta) => {
                            return (
                                <tr>
                                    <td>{venta.idProducto}</td>
                                    <td>{venta.descripcion}</td>
                                    <td>{venta.cantidad}</td>
                                    <td>{venta.valorUnitario}</td>
                                    <td>{venta.valorTotal}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListVentas

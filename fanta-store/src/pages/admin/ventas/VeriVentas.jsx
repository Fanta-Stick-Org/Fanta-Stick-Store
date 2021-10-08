import React, { useEffect, useState } from 'react'

const VeriVentas = () => {

    /* const [mostarTable, setMostrarTable] = useState(false); */

    const ventasBack = [
        {
            idVenta: 'fact-001',
            fechaVenta: '03/10/2021 06:00',
            idCliente: '1010101010',
            nombreCliente: 'Martin Rivera',
            estado: 'En proceso',
            valorTotal: 2299000,
        },
        {
            idVenta: 'fact-002',
            fechaVenta: '04/10/2021 12:00',
            idCliente: '1212323123',
            nombreCliente: 'Juan Paez',
            estado: 'Entregada',
            valorTotal: 3398000,
        },
    ];

    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        setVentas(ventasBack); //se asigna el json a la variable productos
    }, [])

    return (
        <div className='h-full pt-10'>
            <h1 className='tituloGeneral'>Administrador de Ventas</h1>
            <div className="flex items-center justify-center justify-items-start p-2">
                <input className="inputGeneralList" type="=text" name="" placeholder="Buscar" />
                <div className="flex items-center justify-items-end pl-2">
                    <button className='btnGeneralList' /* onClick={()=>setMostrarTable(!mostarTable)} */><i class="fas fa-search"></i></button>
                </div>
            </div>
            <TablaVentasCompletas ListVentas={ventas}/>
        </div>
    )
}

const TablaVentasCompletas = ({ ListVentas }) => {
    useEffect(() => {
        console.log('este es el listado de productos en el componente de tabla', ListVentas);
    }, [ListVentas]);
    return (
        <div className='flex flex-col sm:flex-row flex-nowrap items-center justify-center'>
            <div className='table-container'>
                <table id="table-list">
                    <thead>
                        <tr>
                            <th>Id de venta</th>
                            <th>Fecha de venta</th>
                            <th>Documento Cliente</th>
                            <th>Nombre Cliente</th>
                            <th>Estado de la Venta</th>
                            <th>Total de la Venta</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListVentas.map((venta) => {
                            return (
                                <tr>
                                    <td>{venta.idVenta}</td>
                                    <td>{venta.fechaVenta}</td>
                                    <td>{venta.idCliente}</td>
                                    <td>{venta.nombreCliente}</td>
                                    <td>{venta.estado}</td>
                                    <td>{venta.valorTotal}</td>
                                    <td><a href='/admin/ventas/actualizar' className='linkGeneral'>Actualizar</a></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VeriVentas

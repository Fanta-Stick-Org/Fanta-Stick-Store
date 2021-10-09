import React, { useEffect, useState } from 'react'

const VeriVentas = () => {

    const [mostarTable, setMostrarTable] = useState(false);

    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        setVentas(); //se asigna el json a la variable productos
    }, [])

    return (
        <>
            <div className='px-6'>
                <a href='/admin/ventas' className='btnGeneralNav'><i className="fas fa-arrow-left"></i></a>
            </div>
            <div className='h-full pt-10'>
                <h1 className='tituloGeneral'>Administrador de Ventas</h1>
                <div className="flex items-center justify-center justify-items-start p-2">
                    <input className="inputGeneralList" type="=text" name="" placeholder="Buscar" />
                    <div className="flex items-center justify-items-end pl-2">
                        <button className='btnGeneralList' onClick={()=>setMostrarTable(!mostarTable)}><i class="fas fa-search"></i></button>
                    </div>
                </div>
                <TablaVentasCompletas ListVentas={ventas} />
            </div>
        </>
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

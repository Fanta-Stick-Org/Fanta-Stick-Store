import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import 'styles/list.css'
import { nanoid } from 'nanoid';
import { obtenerVentas } from 'utils/api/apiVentas';

const ListVentas = () => {

    const [mostarTable, setMostrarTable] = useState(false);
    const [ventas, setVentas] = useState([]);
    const [, setEjecutarConsulta] = useState(true);

    useEffect(() => {
        // FUNCION PARA EL GET EN UTILS/API
        if (mostarTable) {
            obtenerVentas(
                (response) => {
                    setVentas(response.data);
                },

                (error) => {
                    console.error(error);
                }
            );
            setEjecutarConsulta(false);
        }
    }, [mostarTable])
    console.log(ventas);

    return (
        <>
            <div className='px-6'>
                <Link to='/admin/ventas/' className='btnGeneralNav'><i className="fas fa-arrow-left"></i></Link>
            </div>
            <div className='w-full h-full pt-10'>
                <h1 className="tituloGeneral">Listado de Ventas</h1>
                <div className="flex items-center justify-center pt-2">
                    <button value="list" id="btn-list-submit" type="submit" className='btnGeneral'
                        onClick={() => setMostrarTable(!mostarTable)}>Listar</button>
                </div>
                {mostarTable &&
                    <TablaVentas listaVentas={ventas} />
                }
            </div>
        </>
    )
}

const TablaVentas = ({ listaVentas }) => {
    useEffect(() => {
        console.log('listado de ventas', listaVentas);
    }, [listaVentas]);
    return (
        <div className='flex flex-col sm:flex-row flex-nowrap items-center justify-center w-full'>
            <div className='table-container'>
                <table id="table-list">
                    <thead>
                        <tr>
                            <th>Id Venta</th>
                            <th>Fecha Venta</th>
                            <th>Vendedor</th>
                            <th>Estado Venta</th>
                            <th>Id cliente</th>
                            <th>Nombre cliente</th>
                            <th>Descripción</th>
                            <th>Cantidad</th>
                            <th>Total Venta</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaVentas.map((venta) => {
                            return (
                                <tr key={nanoid()}>
                                    <td>{venta._id}</td>
                                    <td>{venta.fechaVenta}</td>
                                    <td>{venta.vendedor.name}</td>
                                    <td>{venta.estadoVenta}</td>
                                    <td>{venta.idCliente}</td>
                                    <td>{venta.nameCliente}</td>
                                    <td>{venta.descripcion}</td>
                                    <td>{venta.cantidad}</td>
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

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import 'styles/list.css'
import { nanoid } from 'nanoid';
import { obtenerVentas } from 'utils/api/apiVentas';
import ReactLoading from 'react-loading';

const ListVentas = () => {

    const [mostarTable, setMostrarTable] = useState(false);
    const [ventas, setVentas] = useState([]);
    const [, setEjecutarConsulta] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // FUNCION PARA EL GET EN UTILS/API
        if (mostarTable) {
            const fetchVentas = async () => {
                setLoading(true);
                await obtenerVentas(
                    (response) => {
                        setVentas(response.data);
                        setLoading(false);
                    },

                    (error) => {
                        console.error(error);
                        setLoading(false);
                    }
                );
                setEjecutarConsulta(false);
            }
            fetchVentas();
        }
    }, [mostarTable])
    console.log('ventas', ventas);
    console.log('accediendo', ventas.fechaVenta);

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
                    <TablaVentas loading={loading} listaVentas={ventas} />
                }
            </div>
        </>
    )
}

const TablaVentas = ({ loading, listaVentas }) => {
    useEffect(() => {
        console.log('listado de ventas', listaVentas);
    }, [listaVentas]);
    return (
        <div className='flex flex-col sm:flex-row flex-nowrap items-center justify-center w-full'>
            <div className='table-container'>
                {loading ?
                    (
                        <div className='flex justify-center items-center'>
                            <ReactLoading type='cylon' color='#07f3eb' height={667} width={375} />
                        </div>
                    ) : (
                        <table id="table-list">
                            <thead>
                                <tr>
                                    <th>Id Venta</th>
                                    <th>Fecha Venta</th>
                                    <th>Vendedor</th>
                                    <th>Estado Venta</th>
                                    <th>Id cliente</th>
                                    <th>Nombre cliente</th>
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
                                            <td>{venta.valorTotal}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    )}
            </div>
        </div>
    );
};

export default ListVentas

import React, { useState, useEffect, useRef } from 'react'
import 'styles/list.css'
import axios from 'axios'
import { nanoid } from 'nanoid';

const VeriProductos = () => {

    const [mostarTable, setMostrarTable] = useState(false);
    const [productos, setProductos] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

    useEffect(() => {
        const obtenerProductos = async () => {
            const options = { method: 'GET', url: 'https://vast-waters-45728.herokuapp.com/vehicle/' }; //https://vast-waters-45728.herokuapp.com/vehicle/ db profe
            await axios
                .request(options)
                .then(function (response) {
                    setProductos(response.data);
                })
                .catch(function (error) {
                    console.error(error);
                });
        };

        if (ejecutarConsulta) {
            obtenerProductos();
            setEjecutarConsulta(false);
        }
    }, [ejecutarConsulta])

    useEffect(() => {
        if (mostarTable) {
            setEjecutarConsulta(true)
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
                        <button className='btnGeneralList' onClick={() => setMostrarTable(!mostarTable)}><i className="fas fa-search"></i></button>
                    </div>
                </div>
                {mostarTable &&
                    <TablaProductos listaProductos={productos} setEjecutarConsulta={setEjecutarConsulta} />
                }
            </div>
        </>
    )
}

const TablaProductos = ({ listaProductos, setEjecutarConsulta }) => {
    const form = useRef(null);

    useEffect(() => {
        console.log('listado de productos', listaProductos);
    }, [listaProductos]);

    const submitEdit = async (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

        const editProducto = {};
        formData.forEach((value, key) => {
            editProducto[key] = value;
        });

        console.log('mensaje e', e);
        //request para el patch en db
        //en el funcion response debe ir el toast y el setEjecutarConsulta(true)
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='table-container'>
                <form ref={form} onSubmit={submitEdit}>
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
                                    <FilaProducto key={nanoid()} producto={producto} setEjecutarConsulta={setEjecutarConsulta} />
                                )
                            })}
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
};

const FilaProducto = (producto, setEjecutarConsulta) => {

    const [edit, setEdit] = useState(false);

    const eliminarProducto = async () => {
        //request para delete en db
        //en el funcion response debe ir el toast y el setEjecutarConsulta(true)
    }
    return (
        <tr>
            {edit ? (
                <>
                    <td><input className='inputGeneral' type="text" defaultValue={producto.idProducto} disabled /></td>
                    <td><input className='inputGeneral' type="text" defaultValue={producto.descripcion} /></td>
                    <td><input className='inputGeneral' type="text" defaultValue={producto.valorUnitario} /></td>
                    <td><input className='inputGeneral' type="text" defaultValue={producto.estado} /></td>
                </>

            ) : (
                <>
                    <td>{producto.idProducto}</td>
                    <td>{producto.descripcion}</td>
                    <td>{producto.valorUnitario}</td>
                    <td>{producto.estado}</td>
                </>
            )}
            {/* <td><Link to={`/admin/productos/actualizar/${producto.idProducto}`}>Actualizar</Link></td> */}
            <td>
                <div className='flex w-full justify-evenly'>
                    {edit ? (
                        <button type='submit'>
                            <i onClick={() => setEdit(!edit)} className='fas fa-check p-2 border-2 border-green-300 rounded-md 
                            text-green-500 hover:text-green-700 hover:bg-green-500 hover:bg-opacity-20 hover:border-green-100'></i>
                        </button>
                    ) : (
                        <i onClick={() => setEdit(!edit)} className='fas fa-pencil-alt p-2 border-2 border-gray-300 rounded-md 
                            text-yellow-600 hover:text-yellow-800 hover:bg-green-500 hover:bg-opacity-20 hover:border-green-100'></i>
                    )}

                    <i onClick={() => eliminarProducto()} className='fas fa-trash p-2 border-2 border-gray-300 rounded-md text-red-600 hover:text-red-700 
                    hover:bg-green-500 hover:bg-opacity-20 hover:border-green-100'></i>
                    {/* <a href={`/admin/productos/actualizar/${producto.idProducto}`} className='linkGeneralList'><i className='fas fa-pencil-alt'></i></a>
                                            <a href={`/admin/productos/actualizar/${producto.idProducto}`} className='linkGeneralList text-red-600'><i className='fas fa-trash'></i></a> */}
                </div>
            </td>
        </tr>
    )
}

export default VeriProductos

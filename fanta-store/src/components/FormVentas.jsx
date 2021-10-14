import React, { useEffect, useState, useRef } from 'react'
import { ToastContainer } from 'react-toastify'; //para las alertas
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { obtenerProductos } from '../utils/api/apiProductos'
import { obtenerUsuarios } from '../utils/api/apiUsuarios'
import { registrarVentas } from 'utils/api/apiVentas';

const FormVentas = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [productos, setProductos] = useState([]);
    const form = useRef(null);

    useEffect(() => {
        obtenerProductos(setProductos);
        obtenerUsuarios(setUsuarios);
    }, []);

    useEffect(() => {
        console.log(productos);
    }, [productos]);

    useEffect(() => {
        console.log(usuarios);
    }, [usuarios]);

    const submitForm = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevaVenta = {};
        fd.forEach((value, key) => {
            nuevaVenta[key] = value;
        });

        console.log('nv', nuevaVenta);

        const informacionConsolidada = {
            _id: nuevaVenta._id,
            fechaVenta: nuevaVenta.fechaVenta,
            vendedor: usuarios.filter((el) => el.name === nuevaVenta.vendedor)[0],
            estadoVenta: nuevaVenta.estadoVenta,
            idCliente: nuevaVenta.idCliente,
            nameCliente: nuevaVenta.nameCliente,
            descripcion: productos.filter((el) => el.descripcion === nuevaVenta.descripcion)[0],
            cantidad: nuevaVenta.cantidad,
            valorTotal: nuevaVenta.valorTotal //calcularlo en string?
        };
        console.log('ic', informacionConsolidada);

        registrarVentas(informacionConsolidada);
    };

    return (
        <div className='flex sm:flex-col flex-col justify-center sm:max-w-screen-sm md:w-full h-full pt-8'>
            <form ref={form} onSubmit={submitForm} className='w-full'>
                <div className='grid grid-cols-3 gap-2'>
                    <div className="formGeneral">
                        <label htmlFor="_id" className="textoGeneral">Codigo de Venta</label>
                        <input type="text" className="inputGeneral" name="_id" placeholder="Id de Venta" required></input>
                    </div>
                    <div className="formGeneral">
                        <label htmlFor="fechaVenta" className="textoGeneral">Fecha de venta</label>
                        <input type='datetime-local' className="inputGeneral" name="fechaVenta" required></input>
                    </div>
                    <div className="formGeneral">
                        <label htmlFor="vendedor" className="textoGeneral">Nombre Vendedor</label>
                        <select name="vendedor" type="text" defaultValue={0} className="inputGeneral" required>
                            <option value={0} disabled>Seleccione...</option>
                            {usuarios.map((usuario) => {
                                return (
                                    <option key={nanoid()} value={usuario.name}>
                                        {usuario.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="formGeneral">
                        <label htmlFor="estadoVenta" className="textoGeneral">Estado de la Venta</label>
                        <select name="estadoVenta" type="text" defaultValue={0} className="inputGeneral" required>
                            <option value={0} disabled>Seleccione...</option>
                            <option value="En proceso">En proceso</option>
                            <option value="Entragada">Entragada</option>
                            <option value="Cancelada">Cancelada</option>
                        </select>
                    </div>
                    <div className="formGeneral">
                        <label htmlFor="idCliente" className="textoGeneral">Id Cliente</label>
                        <input type="text" name="idCliente" placeholder="Id del Cliente" className="inputGeneral"></input>
                    </div>
                    <div className="formGeneral">
                        <label htmlFor="nameCliente" className="textoGeneral">Nombre del Cliente</label>
                        <input type="text" name="nameCliente" placeholder="Nombre del Cliente"
                            className="inputGeneral"></input>
                    </div>
                </div>

                <div className='grid grid-cols-4 gap-2'>
                    <div className="formGeneral">
                        <label className="textoGeneral" htmlFor="descripcion"> Producto</label>
                        <select name="descripcion" type="text" defaultValue={0} className="inputGeneral" required>
                            <option value={0} disabled>Seleccione...</option>
                            {productos.map((producto) => {
                                return (
                                    <option key={nanoid()} value={producto.descripcion}>
                                        {producto.descripcion}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="formGeneral">
                        <label className="textoGeneral" htmlFor="Cantidad">Cantidad</label>
                        <input className="inputGeneral" type="number" name="cantidad" min={0} placeholder="Cantidad"></input>
                    </div>
                    <div className="formGeneral">
                        <label className="textoGeneral" htmlFor="valorUnitario">Precio Unitario</label>
                        <input className="inputGeneral" type="number" name="valorUnitario" min={0} placeholder="Precio Unitario"></input>
                    </div>
                    <div className="formGeneral">
                        <label className="textoGeneral" htmlFor="valorTotal">Precio Total</label>
                        <input className="inputGeneral" type="number" name="valorTotal" min={0} placeholder="Precio Total"></input>
                    </div>
                </div>
                <div className='pt-8 flex flex-col items-center'>
                    <div className="formSubmit">
                        <button value="Login" type="submit" className='btnGeneral'>Enviar</button>
                    </div>
                </div>
            </form>
            <ToastContainer position="bottom-right" autoClose={4000} />
        </div>
    )
};

export default FormVentas

import React, { useEffect, useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'; //para las alertas
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { obtenerProductos } from '../utils/api/apiProductos'
import { obtenerUsuarios } from '../utils/api/apiUsuarios'
import { registrarVentas } from 'utils/api/apiVentas';

const FormVentas = () => {

    const form = useRef(null);
    const [usuarios, setUsuarios] = useState([]);
    const [productos, setProductos] = useState([]);
    const [productosTabla, setProductosTabla] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            await obtenerProductos(
                (response) => {
                    setProductos(response.data);
                },
                (error) => {
                    console.error(error);
                });
        }
        const fetchUsuarios = async () => {
            await obtenerUsuarios(
                (response) => {
                    setUsuarios(response.data);
                },
                (error) => {
                    console.error(error);
                });
        }

        fetchProductos();
        fetchUsuarios();
    }, []);


    const submitForm = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevaVenta = {};
        fd.forEach((value, key) => {
            nuevaVenta[key] = value;
        });

        console.log('nv', nuevaVenta);

        const listaProductosFinal = Object.keys(nuevaVenta).map((k) => {
            if (k.includes('cantidad')) {
                return parseInt(k, 10);
            }
            if (k.includes('producto')) {
                return productosTabla.filter((el) => el.descripcion === nuevaVenta[k])[0];
            }
            return null;
        }).filter((el) => el);

        console.log('lpf', listaProductosFinal)

        Object.keys(nuevaVenta).forEach((k) => {
            if (k.includes('cantidad')) {
                const indice = parseInt(k.split('_')[1]);
                listaProductosFinal[indice]['cantidad'] = parseInt(nuevaVenta[k]);
            }
        });

        const informacionConsolidada = {
            _id: nuevaVenta._id,
            fechaVenta: nuevaVenta.fechaVenta,
            vendedor: usuarios.filter((el) => el.name === nuevaVenta.vendedor)[0],
            estadoVenta: nuevaVenta.estadoVenta,
            idCliente: nuevaVenta.idCliente,
            nameCliente: nuevaVenta.nameCliente,
            productos: listaProductosFinal,
            valorTotal: parseInt(nuevaVenta.valorTotal),
        };
        console.log('informacionConsolidada', informacionConsolidada);

        registrarVentas(informacionConsolidada,

            (response) => {
                console.log(response.data);
                toast.success('Venta agregada con éxito!!'); //se guarda en la base de datos si sale bien el toast debe mostrar .success
            },

            (error) => {
                console.error(error);
                toast.error('Error agregando la Venta'); //se guarda en la base de datos si sale error el toast debe cambiar a .error
            }
        );
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
                        <input type='date' className="inputGeneral" name="fechaVenta" required></input>
                    </div>

                    <div className="formGeneral">
                        <label htmlFor="estadoVenta" className="textoGeneral">Estado de la Venta</label>
                        <select name="estadoVenta" type="text" defaultValue='' className="inputGeneral" required>
                            <option value='' disabled>Seleccione...</option>
                            <option value="En proceso">En proceso</option>
                        </select>
                    </div>
                    <div className="formGeneral">
                        <label htmlFor="idCliente" className="textoGeneral">Id Cliente</label>
                        <input type="text" name="idCliente" placeholder="Id del Cliente" className="inputGeneral" required></input>
                    </div>
                    <div className="formGeneral">
                        <label htmlFor="nameCliente" className="textoGeneral">Nombre del Cliente</label>
                        <input type="text" name="nameCliente" placeholder="Nombre del Cliente"
                            className="inputGeneral" required></input>
                    </div>
                </div>

                <div className='flex flex-col items-center w-full'>

                    <TablaProductos productos={productos} setProductos={setProductos} setProductosTabla={setProductosTabla} />

                    <div className='flex flex-row w-full justify-evenly'>
                        <div className="formGeneral">
                            <label htmlFor="vendedor" className="textoGeneral">Nombre Vendedor</label>
                            <select name="vendedor" type="text" defaultValue='' className="inputGeneral" required>
                                <option value='' disabled>Seleccione...</option>
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
                            <label className="textoGeneral" htmlFor="valorTotal">Precio Total</label>
                            <input className="inputGeneral" type="number" name="valorTotal" min={0}
                                placeholder="Precio Total" required></input>
                        </div>
                    </div>

                </div>
                <div className='pt-8 flex flex-col items-center'>
                    <div className="formSubmit">
                        <button type="submit" className='btnGeneral'>Enviar</button>
                    </div>
                </div>
            </form>
            <ToastContainer position="bottom-right" autoClose={4000} />
        </div>
    )
};

const TablaProductos = ({ productos, setProductos, setProductosTabla }) => {

    const [productoAAgregar, setProductoAAgregar] = useState({});
    const [filasTabla, setFilasTabla] = useState([]);

    useEffect(() => {
        console.log('pa', productoAAgregar)
    }, [productoAAgregar])

    useEffect(() => {
        setProductosTabla(filasTabla);
    }, [filasTabla, setProductosTabla])

    const agregarProducto = () => {
        setFilasTabla([...filasTabla, productoAAgregar]);
        setProductos(productos.filter((el) => el._id !== productoAAgregar._id));
        setProductoAAgregar({});
    }

    const eliminarProducto = (productoAEliminar) => {
        setFilasTabla(filasTabla.filter((el) => el._id !== productoAEliminar._id));
        setProductos([...productos, productoAEliminar]);
    }
    return (
        <div>
            <div className='flex flex-row gap-3'>
                <div className="formGeneral">
                    <label className="textoGeneral" htmlFor="descripcion">Producto</label>
                    <select name='descripcion' type="text" value={productoAAgregar.descripcion ?? ''}
                        onChange={(e) => setProductoAAgregar(productos.filter((el) => el.descripcion === e.target.value)[0])}
                        className="inputGeneral">

                        <option value='' disabled>Seleccione...</option>
                        {productos.map((producto) => {
                            return (
                                <option key={nanoid()} value={producto.descripcion}>
                                    {producto.descripcion}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className='py-6'>
                    <button onClick={() => agregarProducto()} className='btnGeneral'>Agregar</button>
                </div>

            </div>
            <div className='flex justify-center py-6'>
                <table>
                    <thead>
                        <tr>
                            <th>Id Producto</th>
                            <th>Producto</th>
                            <th>Valor Unitario</th>
                            <th>Cantidad</th>
                            <th>Opciones</th>
                            <th className='hidden'>input</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filasTabla.map((el, index) => {
                            return (
                                <tr key={nanoid()}>
                                    <td>{el._id}</td>
                                    <td>{el.descripcion}</td>
                                    <td>{el.valorUnitario}</td>
                                    <td>
                                        <input className="inputGeneral" type="number" name={`cantidad_${index}`} min={0}
                                            placeholder="Cantidad" required></input>
                                    </td>
                                    <td>
                                        <div className='text-center'>
                                            <i onClick={() => eliminarProducto(el)} className='fas fa-minus p-2 border-2 border-red-300 rounded-md
                                            text-red-600 hover:bg-red-700 hover:bg-opacity-20 hover:border-red-400
                                                transition-all'></i>
                                        </div>
                                    </td>
                                    <input hidden defaultValue={el.descripcion} name={`producto_${index}`} />
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    )
}
export default FormVentas

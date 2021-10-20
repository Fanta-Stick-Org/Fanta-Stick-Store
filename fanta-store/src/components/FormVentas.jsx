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

        const listaProductosFinal = Object.keys(nuevaVenta).map((k) => {
            if (k.includes('producto')) {
                return productosTabla.filter((el) => el._id === nuevaVenta[k])[0];
            }
            return null;
        }).filter((el) => el);

        //console.log('lpf', listaProductosFinal);
        //console.log('productos tabla', productosTabla);

        let totalVentas = 0;
        productosTabla.forEach(i => {
            totalVentas = totalVentas + i.valorTotal;
        });

        const informacionConsolidada = {
            _id: nuevaVenta._id,
            fechaVenta: nuevaVenta.fechaVenta,
            vendedor: usuarios.filter((el) => el.name === nuevaVenta.vendedor)[0],
            estadoVenta: nuevaVenta.estadoVenta,
            idCliente: nuevaVenta.idCliente,
            nameCliente: nuevaVenta.nameCliente,
            productos: listaProductosFinal,
            valorTotal: totalVentas,
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

    const modificarProducto = (producto, cantidad) => {
        setFilasTabla(
            filasTabla.map((ft) => {
                if (ft._id === producto._id) {
                    ft.cantidad = cantidad;
                    ft.valorTotal = producto.valorUnitario * ft.cantidad;
                }
                return ft;
            })
        )
    }
    return (
        <div>
            <div className='flex flex-row gap-3'>
                <div className="formGeneral">
                    <label className="textoGeneral" htmlFor="descripcion">Producto</label>
                    <select name='descripcion' type="text" value={productoAAgregar._id ?? ''}
                        onChange={(e) => setProductoAAgregar(productos.filter((el) => el._id === e.target.value)[0])}
                        className="inputGeneral">

                        <option value='' disabled>Seleccione...</option>
                        {productos.map((producto) => {
                            return (
                                <option key={nanoid()} value={producto._id}>
                                    {producto.descripcion}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className='py-6'>
                    <button type='button' onClick={() => agregarProducto()} className='btnGeneral'>Agregar</button>
                </div>

            </div>
            <div className='flex justify-center py-6'>
                <table>
                    <thead>
                        <tr>
                            <th>Id Producto</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Valor Unitario</th>
                            <th>Total</th>
                            <th>Opciones</th>
                            <th className='hidden'>input</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filasTabla.map((el, index) => {
                            return (
                                <FilaProducto key={el._id} prod={el} index={index} eliminarProducto={eliminarProducto}
                                    modificarProducto={modificarProducto} />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

const FilaProducto = ({ prod, index, eliminarProducto, modificarProducto }) => {
    const [producto, setProducto] = useState(prod);
    useEffect(() => {
        console.log('prod', producto);
    }, [producto]);
    return (
        <tr>
            <td>{producto._id}</td>
            <td>{producto.descripcion}</td>
            <td>
                <input
                    type='number'
                    name={`cantidad_${index}`}
                    value={producto.cantidad}
                    min={1}
                    onChange={(e) => {
                        modificarProducto(producto, e.target.value === '' ? '0' : e.target.value);
                        setProducto({
                            ...producto,
                            cantidad: e.target.value === '' ? '0' : e.target.value,
                            valorTotal:
                                parseFloat(producto.valorUnitario) * parseFloat(e.target.value === '' ? '0' : e.target.value),
                        })
                    }}
                />
            </td>
            <td>{producto.valorUnitario}</td>
            <td>{parseFloat(producto.valorTotal ?? 0)}</td>
            <td>
                <i
                    onClick={() => eliminarProducto(producto)}
                    className='fas fa-minus text-red-500 cursor-pointer'
                />
            </td>
            <td className='hidden'>
                <input hidden defaultValue={producto._id} name={`producto_${index}`} />
            </td>
        </tr>
    );
};
export default FormVentas

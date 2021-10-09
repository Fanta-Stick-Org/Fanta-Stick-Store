import React, { /* useEffect, */ useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'; //para las alertas
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const FormVentas = () => {

    const [mostrarCamposAdicionales, setMostrarCamposAdicionales] = useState(false);

    /* const [agregarProducto, setAgregarProducto] = useState(false);

    useEffect(() => {
        console.log('mas campos', agregarProducto)
        if (agregarProducto === false) {
            setAgregarProducto(!agregarProducto);
        }
        }, [agregarProducto]); */

    const form = useRef(null);

    const submitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);

        const nuevaVenta = {};
        formData.forEach((value, key) => {
            nuevaVenta[key] = value;
        });

        console.log('el nuevo producto: ', nuevaVenta)

        const options = {
            method: 'POST',
            url: '', //url de mi base de datos
            headers: { 'Content-Type': 'application/json' },
            data: {
                idsale: nuevaVenta.idsale, dateSale: nuevaVenta.dateSale, idSeller: nuevaVenta.idSeller, stateSale: nuevaVenta.stateSale,
                idCustomer: nuevaVenta.idCustomer, nameCustomer: nuevaVenta.nameCustomer, idproducto: nuevaVenta.idproducto,
                descripcion: nuevaVenta.descripcion, cantidad: nuevaVenta.cantidad, valorUnitario: nuevaVenta.valorUnitario,
                valorTotal: nuevaVenta.valorTotal
            },
        };

        await axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                toast.success('Producto agregado con éxito!!'); //se guarda en la base de datos si sale bien el toast debe mostrar .success
            })
            .catch(function (error) {
                console.error(error);
                toast.error('Error agregando el producto'); //se guarda en la base de datos si sale error el toast debe cambiar a .error
            });
    };

    return (
        <div className='flex sm:flex-col flex-row flex-nowrap justify-center sm:max-w-screen-sm h-full'>
            <form ref={form} onSubmit={submitForm} name="registrarVenta" id="form-register-sales">
                <div className='flex flex-col'>
                    <div className="formGeneral">
                        <label for="idSale" className="textoGeneral">Codigo de Venta</label>
                        <input type="text" className="inputGeneral" name="idSale" placeholder="Id de Venta"></input>
                    </div>
                    <div className="formGeneral">
                        <label for="dateSale" className="textoGeneral">Fecha de venta </label>
                        <input type="datetime-local" className="inputGeneral" name="dateSale" placeholder="Fecha de Venta"></input>
                    </div>

                    <div className="formGeneral">
                        <label for="idSeller" className="textoGeneral">Codigo Vendedor</label>
                        <input type="text" id="idSeller" name="idSeller" placeholder="Id del Vendedor" className="inputGeneral"></input><br />
                    </div>

                    <div className="formGeneral">
                        <label for="stateSale" className="textoGeneral">Estado de la Venta</label><br />

                        <input type="radio" id="stateSaleCancel" name="stateSale" value="Cancelada" className="input"></input>
                        <label for="stateSaleCancel" className="textoGeneral"> En proceso</label> <br />

                        <input type="radio" id="stateSalePend" name="stateSale" value="Pendiente" className="input"></input>
                        <label for="stateSalePend" className="textoGeneral"> Cancelada</label><br />

                        <input type="radio" id="stateSaleClosed" name="stateSale" value="Cerrada" className="input"></input>
                        <label for="stateSaleClosed" className="textoGeneral"> Entregada</label><br />
                    </div>

                    <div className="formGeneral">
                        <label for="idCustomer" className="textoGeneral">Codigo Cliente</label>
                        <input type="text" id="idCustomer" name="idCustomer" placeholder="Id del Cliente" className="inputGeneral"></input>
                    </div>
                    <div className="formGeneral">
                        <label for="nameCustumer" className="textoGeneral">Nombre del Cliente</label>
                        <input type="text" id="nameCustumer" name="nameCustumer" placeholder="Nombre del Cliente"
                            className="inputGeneral"></input>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <button onClick={() => setMostrarCamposAdicionales(!mostrarCamposAdicionales)} type='button'
                        className='linkGeneralBlue'>Formulario completo</button>
                </div>

                {/* <div className='flex justify-center'>
                    <button onClick={() => setAgregarProducto(!agregarProducto)} value="Login" id="btn-form-submit" type="button"
                        className='linkGeneralBlue'>Agregar Otro Producto</button>
                </div> */}

                {mostrarCamposAdicionales &&
                    <div className="flex flex-col">
                        <div className="formGeneral">
                            <label className="textoGeneral" for="idProduct">Id del Producto</label>
                            <input className="inputGeneral" type="text" id="idProducto" name="idProducto" placeholder="Codigo del Producto"></input>
                        </div>
                        <div className="formGeneral">
                            <label className="textoGeneral" for="nameProduct">Descripcion del Producto</label>
                            <input className="inputGeneral" type="text" id="descripcion" name="descripcion"
                                placeholder="Descripcion del Producto"></input>
                        </div>
                        <div className="formGeneral">
                            <label className="textoGeneral" for="qtyProduct">Cantidad</label><br />
                            <input className="inputGeneral" type="number" id="cantidad" name="cantidad" min={0} placeholder="Cantidad"></input>
                        </div>
                        <div className="formGeneral">
                            <label className="textoGeneral" for="priceProduct">Precio Unitario</label>
                            <input className="inputGeneral" type="number" id="valorUnitario" name="valorUnitario" min={0}
                                placeholder="Precio Unitario"></input>
                        </div>
                        <div className="formGeneral">
                            <label className="textoGeneral" for="priceProduct">Precio Total</label>
                            <input className="inputGeneral" type="number" id="valorTotal" name="valorTotal" min={0}
                                placeholder="Precio Total"></input>
                        </div>
                    </div>
                }

                {/* {agregarProducto && 
                    <div className="flex flex-col">
                        <div className="formGeneral">
                            <label className="textoGeneral" for="idProduct">Codigo del Producto</label>
                            <input className="inputGeneral" type="text" id="idProduct" name="idProduct" placeholder="Codigo del Producto"></input>
                        </div>
                        <div className="formGeneral">
                            <label className="textoGeneral" for="nameProduct">Descripcion del Producto</label>
                            <input className="inputGeneral" type="text" id="nameProduct" name="nameProduct"
                                placeholder="Descripcion del Producto"></input>
                        </div>
                        <div className="formGeneral">
                            <label className="textoGeneral" for="qtyProduct">Cantidad</label><br />
                            <input className="inputGeneral" type="number" id="qtyProduct" name="qtyProduct" min={0} placeholder="Cantidad"></input>
                        </div>
                        <div className="formGeneral">
                            <label className="textoGeneral" for="priceProduct">Precio Unitario</label>
                            <input className="inputGeneral" type="number" id="priceProduct" name="priceProduct" min={0}
                                placeholder="Precio Unitario"></input>
                        </div>
                        <div className="formGeneral">
                            <label className="textoGeneral" for="priceProduct">Precio Total</label>
                            <input className="inputGeneral" type="number" id="totalPriceProducts" name="totalPriceProducts" min={0}
                                placeholder="Precio Total"></input>
                        </div>
                    </div>
                } */}

                <div className="formSubmit">
                    <button onClick={submitForm} value="Login" id="btn-form-submit" type="button"
                        className='btnGeneral'>Enviar</button>
                </div>
            </form>
            <ToastContainer position="bottom-right" autoClose={4000} />
        </div>
    )
};

export default FormVentas

import React, { useEffect, useState } from 'react'

const FormProducto = () => {


    const [idsale, setIdsale] = useState('');
    const [descripProducto, setDescripProducto] = useState('');
    const [valorUnitario, setValorUnitarioo] = useState('');
    const [estadoProducto, setEstadoProducto] = useState('');

    /* useEffect(() => {
        console.log('hola soy useeffect y se ejecuta al inicio porque el array esta vacio');
    },[]) // se ejecuta al inicio*/

    /* useEffect(() => {
        console.log('el valor de la variable es ', idProducto);
    }, [idProducto]) //guarda el valor de la variable en cada camibio */

    const enviarDatosAlBackend = () => {
        console.log('El valor de la variable idProducto es ', idsale);
        console.log('El valor de la variable descripProducto es ', descripProducto);
        console.log('El valor de la variable valorUnitario es ', valorUnitario);
        console.log('El valor de la variable estadoProducto es ', estadoProducto);
    }; //me almacena el valor del input especificado en una variable

    return (
        <div className='pb-32'>
            <form name="registrarVenta" id="form-register-sales">
                <div className='flex flex-col w-96'>
                    <div className="formGeneral">
                        <label for="idSale" className="textoGeneral">Codigo de Venta</label>
                        <input id='idSale' type="text" className="inputGeneral" name="idSale" placeholder="Id de Venta"></input>
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
                        <label for="stateSaleCancel" className="textoGeneral"> Cancelada</label> <br />

                        <input type="radio" id="stateSalePend" name="stateSale" value="Pendiente" className="input"></input>
                        <label for="stateSalePend" className="textoGeneral"> Pendiente</label><br />

                        <input type="radio" id="stateSaleClosed" name="stateSale" value="Cerrada" className="input"></input>
                        <label for="stateSaleClosed" className="textoGeneral"> Cerrada</label><br />
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


                <div className="flex flex-col w-96">
                    <div className="formGeneral">
                        <label className="textoGeneral" for="idProduct">Codigo del Producto</label>
                        <input className="inputGeneral" type="text" id="idProduct" name="idProduct" placeholder="Codigo del Producto"></input>
                    </div>
                    <div className="formGeneral">
                        <label className="textoGeneral" for="nameProduct">Descripcion del Producto</label>
                        <input className="inputGeneral" type="text" id="nameProduct" name="nameProduct" placeholder="Descripcion del Producto"></input>
                    </div>
                    <div className="formGeneral">
                        <label className="textoGeneral" for="qtyProduct">Cantidad</label><br />
                        <input className="inputGeneral" type="text" id="qtyProduct" name="qtyProduct" placeholder="Cantidad"></input>
                    </div>
                    <div className="formGeneral">
                        <label className="textoGeneral" for="priceProduct">Precio Unitario</label>
                        <input className="inputGeneral" type="text" id="priceProduct" name="priceProduct" placeholder="Precio Unitario"></input>
                    </div>
                    <div className="formGeneral">
                        <label className="textoGeneral" for="priceProduct">Precio Total</label>
                        <input className="inputGeneral" type="text" id="totalPriceProducts" name="totalPriceProducts" placeholder="Precio Total"></input>
                    </div>
                </div>

                {/* <button className="button+">+</button>
                <br />
                
                <br /><br /> */}
                <div className="formSubmit">
                    <button onClick={enviarDatosAlBackend} value="Login" id="btn-form-submit" type="button" className='btnGeneral'>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default FormProducto

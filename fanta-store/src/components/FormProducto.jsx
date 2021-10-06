import React, { useEffect, useState } from 'react'

const FormProducto = () => {


    const [idProducto, setIdProducto] = useState('');
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
        console.log('El valor de la variable idProducto es ', idProducto);
        console.log('El valor de la variable descripProducto es ', descripProducto);
        console.log('El valor de la variable valorUnitario es ', valorUnitario);
        console.log('El valor de la variable estadoProducto es ', estadoProducto);
    }; //me almacena el valor del input especificado en una variable

    return (
        <div>
            <form id="form-register-products">
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="idProducto">Id Producto </label>
                    <input onChange={(e) => { setIdProducto(e.target.value) }} className="inputGeneral" name="idProducto" type="text" id="idProducto" placeholder="Ej: 001" required></input>
                </div>
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="descripcion">Descripción </label>
                    <input onChange={(e) => { setDescripProducto(e.target.value) }} className="inputGeneral" name="descripcion" type="text" id="descripcion"
                        placeholder="Ej: Modelo, Marca..." required></input>
                </div>
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="valorUnitario">Valor Unitario </label>
                    <input onChange={(e) => { setValorUnitarioo(e.target.value) }} className="inputGeneral" name="valorUnitario" type="number" id="valorUnitario" placeholder="Ej: 10.000" required></input>
                </div>
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="estado">Estado </label>
                    <select onChange={(e) => { setEstadoProducto(e.target.value) }} className="inputGeneral" name="estado" type="text" id="estado" required>
                        <option>Seleccione...</option>
                        <option value="disponible">Disponible</option>
                        <option value="noDisponible">No Disponible</option>
                    </select>
                </div>
                <div className="formSubmit">
                    <button onClick={enviarDatosAlBackend} value="Login" id="btn-form-submit" type="button" className='btnGeneral'>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default FormProducto

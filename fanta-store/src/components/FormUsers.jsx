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
                    <label className="textoForm" htmlFor="idUsuario">Id Usuario </label>
                    <input onChange={(e) => { setIdProducto(e.target.value) }} className="inputGeneral" name="idUsuario" type="text" id="idUsuario" placeholder="Ej: 001" required></input>
                </div>
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="nombre">Nombre </label>
                    <input onChange={(e) => { setDescripProducto(e.target.value) }} className="inputGeneral" name="nombre" type="text" id="nombre"
                        placeholder="Ej: Modelo, Marca..." required></input>
                </div>
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="email">Email </label>
                    <input onChange={(e) => { setValorUnitarioo(e.target.value) }} className="inputGeneral" name="email" type="number" id="email" placeholder="Ej: 10.000" required></input>
                </div>
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="roles">Roles </label>
                    <select onChange={(e) => { setEstadoProducto(e.target.value) }} className="inputGeneral" name="roles" type="text" id="roles" required>
                        <option value="noAsignado">No asignado </option>
                        <option value="vendedor">Vendedor </option>
                        <option value="administrador">Administrador</option>
                    </select>
                </div>
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="estado">Estado </label>
                    <select onChange={(e) => { setEstadoProducto(e.target.value) }} className="inputGeneral" name="estado" type="text" id="estado" required>
                        <option value="pendiente">Pendiente </option>
                        <option value="no Autorizado">No autorizado</option>
                        <option value="autorizado">Autorizado</option>
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

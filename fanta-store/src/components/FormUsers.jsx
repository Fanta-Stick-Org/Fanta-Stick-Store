import React, { /* useEffect, useState, */ useRef } from 'react'
import { /* ToastContainer, */ toast } from 'react-toastify'; //para las alertas
import 'react-toastify/dist/ReactToastify.css';

const FormUsers = () => {

    /* useEffect(() => {
        console.log('hola soy useeffect y se ejecuta al inicio porque el array esta vacio');
    },[]) // se ejecuta al inicio*/

    /* useEffect(() => {
        console.log('el valor de la variable es ', idProducto);
    }, [idProducto]) //guarda el valor de la variable en cada camibio */

    /* const enviarDatosAlBackend = () => {
        console.log('El valor de la variable idProducto es ', idProducto);
        console.log('El valor de lsa variable descripProducto es ', descripProducto);
        console.log('El valor de la variable valorUnitario es ', valorUnitario);
        console.log('El valor de la variable estadoProducto es ', estadoProducto);
    }; //me almacena el valor del input especificado en una variable */

    const form = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const nuevousuario = {};
        formData.forEach((value, key) => {
            nuevousuario[key] = value;
        })
        //se guarda en la base de datos si sale bien el toast debe mostrar .success
        console.log('datos guardados', nuevousuario)
        toast.success('Producto registrado con éxito!!');
        //se guarda en la base de datos si sale error el toast debe cambiar a .error
    };

    return (
        <div className='flex sm:flex-col flex-row flex-nowrap justify-center sm:max-w-screen-sm h-full'>
            <form ref={form} onSubmit={submitForm} id="form-register-products">
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="idUsuario">Id Usuario </label>
                    <input className="inputGeneral" name="idUsuario" type="text" id="idUsuario" placeholder="" required></input>
                </div>
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="nombre">Nombre </label>
                    <input className="inputGeneral" name="nombre" type="text" id="nombre" placeholder="" required></input>
                </div>
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="email">Email </label>
                    <input className="inputGeneral" name="email" type="email" id="email" placeholder="dev@test.com" required></input>
                </div>
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="roles">Roles </label>
                    <select className="inputGeneral" name="roles" type="text" id="roles" defaultValue={0} required>
                        <option value={0} disabled>Seleccione...</option>
                        <option value="noAsignado">No asignado </option>
                        <option value="vendedor">Vendedor </option>
                        <option value="administrador">Administrador</option>
                    </select>
                </div>
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="estado">Estado </label>
                    <select className="inputGeneral" name="estado" type="text" id="estado" defaultValue={0} required>
                        <option value={0} disabled>Seleccione...</option>
                        <option value="pendiente">Pendiente </option>
                        <option value="no Autorizado">No autorizado</option>
                        <option value="autorizado">Autorizado</option>
                    </select>
                </div>
                <div className="formSubmit">
                    <button onClick={submitForm} value="Login" id="btn-form-submit" type="button" className='btnGeneral'>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default FormUsers

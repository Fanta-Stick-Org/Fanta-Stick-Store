import React, { useRef } from 'react'
import { ToastContainer } from 'react-toastify'; //para las alertas
import 'react-toastify/dist/ReactToastify.css';
import { registrarProductos } from 'utils/api';

const FormUsers = () => {

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
        registrarProductos(nuevousuario);

    };

    return (
        <div className='flex sm:flex-col flex-row flex-nowrap justify-center sm:max-w-screen-sm h-full'>
            <form ref={form} onSubmit={submitForm} id="form-register-products">
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="idUsuario">Id Usuario </label>
                    <input className="inputGeneral" name="name" type="text" id="idUsuario" placeholder="" required></input>
                </div>
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="nombre">Nombre </label>
                    <input className="inputGeneral" name="brand" type="text" id="nombre" placeholder="" required></input>
                </div>
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="email">Email </label>
                    <input className="inputGeneral" name="mddel" type='number' /* type="email" */ id="email" placeholder="dev@test.com" required></input>
                </div>
                {/*  <div className="formGeneral">
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
                </div> */}
                <div className="formSubmit">
                    <button value="Login" id="btn-form-submit" type="submit" className='btnGeneral'>Enviar</button>
                </div>
            </form>
            <ToastContainer position="bottom-right" autoClose={4000} closeOnClick />
        </div>
    )
}

export default FormUsers

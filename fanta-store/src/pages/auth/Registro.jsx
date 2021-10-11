import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'; //para las alertas
import 'react-toastify/dist/ReactToastify.css';
import { registrarProductos } from 'utils/api';

const Registro = () => {

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
        <>
            <h2 className='tituloGeneral'>Crea tu cuenta</h2>
            <form ref={form} onSubmit={submitForm} className='mt-8 space-y-6'>
                <div className='rounded-md shadow-sm grid grid-cols-2 gap-2'>
                    <label htmlFor='nombre'>
                        Nombre
                        <input
                            name='name'
                            type='text'
                            autoComplete='email'
                            required
                            className='inputGeneral'
                            placeholder='Nombre'
                        />
                    </label>
                    <label htmlFor='apellido'>
                        Apellido
                        <input
                            name='brand'
                            type='text'
                            required
                            className='inputGeneral'
                            placeholder='Apellido'
                        />
                    </label>
                    <label htmlFor='telefono'>
                        Teléfono
                        <input
                            name='model'
                            type='number'
                            /* type='tel' */
                            required
                            className='inputGeneral'
                            placeholder='3066151012'
                        />
                    </label>
                    {/* <label htmlFor='nacimiento'>
                        Fecha de Nacimiento
                        <input
                            name='nacimiento'
                            type='date'
                            required
                            className='inputGeneral'
                        />
                    </label>
                    <label htmlFor='correo'>
                        Correo electrónico
                        <input
                            name='correo'
                            type='email'
                            required
                            className='inputGeneral'
                        />
                    </label>
                    <label htmlFor='nacimiento'>
                        Contraseña
                        <input
                            name='contraseña'
                            type='password'
                            required
                            className='inputGeneral'
                        />
                    </label> */}
                </div>

                <div>
                    <button type='submit' className='btnGeneral'>
                        <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                            Registrar
                        </span>
                        {/* <Link to='/admin'>Regístrate</Link> */}
                    </button>
                </div>

                <div className='flex items-center justify-between'>
                    <span>¿Ya tienes cuenta?</span>
                    <Link to='/login'>
                        <span className='linkGeneral'>Inicia Sesión</span>
                    </Link>
                </div>
            </form>
            <ToastContainer position="bottom-right" autoClose={4000} closeOnClick />
        </>
    )
}

export default Registro
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'; //para las alertas
import 'react-toastify/dist/ReactToastify.css';
import { registrarUsuarios } from 'utils/api/apiUsuarios';

const Registro = () => {

    const form = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const nuevoUsuario = {};
        formData.forEach((value, key) => {
            nuevoUsuario[key] = value;
        })
        //se guarda en la base de datos si sale bien el toast debe mostrar .success
        console.log('datos guardados', nuevoUsuario)
        registrarUsuarios({
            _id: nuevoUsuario._id,
            name: nuevoUsuario.name,
            email: nuevoUsuario.email,
            rol: nuevoUsuario.rol,
            estadoUsuario: nuevoUsuario.estadoUsuario,
            password: nuevoUsuario.password
        },

            (response) => {
                console.log(response.data);
                toast.success('Usuario agregado con éxito!!');
            },

            (error) => {
                console.error(error);
                toast.error('Error agregando el Usuario');
            });
    };
    return (
        <>
            <h2 className='tituloGeneral'>Crea tu cuenta</h2>
            <form ref={form} onSubmit={submitForm} className='mt-8 space-y-6'>
                <div className='rounded-md shadow-sm grid grid-cols-2 gap-2'>
                    <label htmlFor='_id'>
                        Id Usuario
                        <input
                            name='_id'
                            type='text'
                            className='inputGeneral'
                            placeholder='1000000000'
                            required
                        />
                    </label>
                    <label htmlFor='name'>
                        Nombre Completo
                        <input
                            name='name'
                            type='text'
                            className='inputGeneral'
                            placeholder='Juan Murillo'
                            required
                        />
                    </label>
                    <label htmlFor='correo'>
                        Correo electrónico
                        <input
                            name='email'
                            type='email'
                            className='inputGeneral'
                            required
                        />
                    </label>
                    <label htmlFor='rol'>
                        Rol
                        <select name="rol" type="text" defaultValue='' className="inputGeneral" required>
                            <option value='' disabled>Seleccione...</option>
                            <option value="Vendedor">Vendedor</option>
                        </select>
                    </label>
                    <label htmlFor='estadoUsuario'>
                        Estado
                        <select name="estadoUsuario" type="text" defaultValue='' className="inputGeneral" required>
                            <option value='' disabled>Seleccione...</option>
                            <option value="Pendiente">Pendiente</option>
                        </select>
                    </label>
                    <label htmlFor='password'>
                        Contraseña
                        <input
                            name='password'
                            type='password'
                            className='inputGeneral'
                            required
                        />
                    </label>
                </div>

                <div>
                    <button type='submit' className='btnGeneral'>
                        Registrar
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
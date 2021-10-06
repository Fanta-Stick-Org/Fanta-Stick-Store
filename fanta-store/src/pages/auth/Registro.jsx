import React from 'react'
import { Link } from 'react-router-dom'

const Registro = () => {
    return (
        <>
            <h2 className='tituloGeneral'>Crea tu cuenta</h2>
            <form className='mt-8 space-y-6'>
                <div className='rounded-md shadow-sm grid grid-cols-2 gap-2'>
                    <label htmlFor='nombre'>
                        Nombre
                        <input
                            name='nombre'
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
                            name='apellido'
                            type='text'
                            required
                            className='inputGeneral'
                            placeholder='Apellido'
                        />
                    </label>
                    <label htmlFor='telefono'>
                        Teléfono
                        <input
                            name='telefono'
                            type='tel'
                            required
                            className='inputGeneral'
                            placeholder='3066151012'
                        />
                    </label>
                    <label htmlFor='nacimiento'>
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
                    </label>
                </div>

                <div>
                    <button type='submit' className='btnGeneral'>
                        <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                            {/* <LockClosedIcon
                                className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                                aria-hidden='true'
                            /> */}
                        </span>
                        <Link to='/admin'>Regístrate</Link>
                    </button>
                </div>

                <div className='flex items-center justify-between'>
                    <span>¿Ya tienes cuenta?</span>
                    <Link to='/login'>
                        <span className='linkGeneral'>Inicia Sesión</span>
                    </Link>
                </div>
            </form>
        </>
    )
}

export default Registro
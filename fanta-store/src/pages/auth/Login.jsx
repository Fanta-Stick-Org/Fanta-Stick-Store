import googleIcon from 'media/google.png'
import React from 'react'
import { Link } from 'react-router-dom'
import 'styles/general.css'

const Login = () => {
    return (
        <>
            <div className='max-w-md w-full space-y-8'>
                <h2 className='tituloGeneral'>Inicia Sesión en tu Cuenta</h2>
                <form className='mt-8 space-y-6'>
                    <input type='hidden' name='remember' defaultValue='true' />
                    <div>
                        <input name="" id="" autoComplete='email' type="email" required className='inputGeneral' placeholder='Correo Electrónico' />
                        <input name="" id="" autoComplete='password' type="password" required className='inputGeneral' placeholder='Contraseña' />
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <input name="remember-me" id="remember-me" type="checkbox" className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded' />
                            <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>Recuérdame</label>
                        </div>
                        <div className='text-sm'>
                            <a href='/' className='linkGeneral'>
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                    </div>
                    <div>
                        <button type='submit' className='btnGeneral'>
                            <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                                {/* <LockClosedIcon
                                className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                                aria-hidden='true'
                            /> */}
                            </span>
                            <Link to='/admin'>Inicia sesión</Link>
                        </button>
                    </div>

                    <div className='flex items-center justify-between'>
                        <span>¿No tienes cuenta?</span>
                        <Link to='/registro'>
                            <span className='linkGeneral'>Regístrate</span>
                        </Link>
                    </div>

                    <div className='flex items-center justify-center'>
                        <span className='mx-4'>------------------------</span>
                        <h2 className='my-1 text-center text-sm font-medium text-gray-900'>O</h2>
                        <span className='mx-4'>------------------------</span>
                    </div>

                    <div className='max-w-md w-full'>
                        <div>
                            <button type='submit' className='btnGoogle'>
                                <img src={googleIcon} alt="GoogleIcon" className='h-6 w-6' />
                                <span className='mx-4 pt-0.5'>Continúa con Google</span>
                            </button>   
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login

import React from 'react'
import producLogo from 'media/producto.png'
import 'styles/principalPages.css'

const Productos = () => {
    return (
        <>
            <div className='flex flex-row justify-end mb-28'>
                <div className='px-8'>
                    <a href='/admin/productos/actualizar' className='linkGeneralNav'>Actualizar</a>
                    <a href='/admin/productos/verificar' className='linkGeneralNav'>Verificar</a>
                    <a href='/admin/productos/listar' className='linkGeneralNav'>Listar</a>
                    <a href='/admin/productos/registrar' className='linkGeneralNav'>Registrar</a>
                </div>
            </div>
            <div>
                <h1 className='tituloGeneral'>Página Principal de Productos</h1>
                <div id="contentPrincipal">
                    <div className="itemPrincipal"><img src={producLogo} alt="producto"></img></div>
                    <div className="itemPrincipal">
                        <p>Esta página te permitirá tener opciones de <br></br> navegacion ⏮⏩.
                            Aquí encontrarás las opciones <br></br>
                            de Registrar 🆕, Listar 📑, Verificar ✅ <br></br>
                            y Actualizar 💭 Productos. <br></br><br></br>
                            Cordialmente. @<a href="https://github.com/Fanta-Stick-Org/Fanta-Stick-Store" className='linkGeneral'>Fanta-Stick
                                Team</a> 💜.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Productos

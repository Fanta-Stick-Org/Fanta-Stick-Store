import React from 'react'
import sales from 'media/sales.png'
import 'styles/principalPages.css'

const Ventas = () => {
    return (
        <>
            <div className='flex flex-row justify-end mb-28'>
                <div className='px-8'>
                    <a href='/admin/ventas/actualizar' className='linkGeneralNav'>Actualizar</a>
                    <a href='/admin/ventas/verificar' className='linkGeneralNav'>Verificar</a>
                    <a href='/admin/ventas/listar' className='linkGeneralNav'>Listar</a>
                    <a href='/admin/ventas/registrar' className='linkGeneralNav'>Registrar</a>
                </div>
            </div>
            <div>
                <h1 className='tituloGeneral'>Página Principal de Ventas</h1>
                <div id="contentPrincipal">
                    <div className="itemPrincipal"><img src={sales} alt="sales"></img></div>
                    <div className="itemPrincipal">
                        <p>Esta página te permitirá tener opciones de <br></br> navegacion ⏮⏩.
                            Aquí encontrarás las opciones <br></br>
                            de Registrar 🆕, Listar 📑, Verificar ✅ <br></br>
                            y Actualizar 💭 Ventas. <br></br><br></br>
                            Cordialmente. @<a href="https://github.com/Fanta-Stick-Org/Fanta-Stick-Store" className='linkGeneral'>Fanta-Stick
                                Team</a> 💜.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ventas

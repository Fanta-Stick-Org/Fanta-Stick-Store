import React from 'react'
import producLogo from 'media/producto.png'
import 'styles/principalPages.css'

const Productos = () => {
    return (
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
    )
}

export default Productos

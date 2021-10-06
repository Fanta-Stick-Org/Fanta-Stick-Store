import React from 'react'
import store from 'media/store.png'
import 'styles/principalPages.css'

const Principal = () => {
    return (
        <div>
            <h1 className='tituloGeneral'>Página Principal de Fanta-Stick-Store</h1>
            <div id="contentPrincipal">
                <div className="itemPrincipal"><img src={store} alt="store"></img></div>
                <div className="itemPrincipal">
                    <p>Esta página te permitirá tener opciones de <br></br> navegacion ⏮⏩. 
                        Aquí encontrarás las opciones <br></br>
                        de Productos 🎁, Ventas 🛒 y Usuarios 👁‍🗨. <br></br><br></br>
                        Cordialmente. @<a href="https://github.com/Fanta-Stick-Org/Fanta-Stick-Store" className='linkGeneral'>Fanta-Stick
                            Team</a> 💜.</p>
                </div>
            </div>
        </div>
    )
}

export default Principal
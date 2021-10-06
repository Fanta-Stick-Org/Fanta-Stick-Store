import React from 'react'
import shop from 'media/shop.jpg'
import 'styles/index.css'

const Index = () => {
    return (
        <div>
            <h1 className='tituloGeneral'>¡Bienvenido a Fanta-Stick-Store!</h1>
            <div id="contentIndex">
                <div className="itemIndex"><img src={shop} alt="shop"></img></div>
                <div className="itemIndex">
                    <p>Este proyecto es hecho por el Fanta-Stick-Org 👩🏻‍💻👨🏻‍💻. <br></br>
                        para llevar a cabo la gestión de las ventas físicas y online ✅. <br></br><br></br>
                        Cordialmente. @<a href="https://github.com/Fanta-Stick-Org/Fanta-Stick-Store" className='linkGeneral'>Fanta-Stick
                            Team</a> ❤.</p>
                </div>
            </div>
        </div>
    )
}

export default Index
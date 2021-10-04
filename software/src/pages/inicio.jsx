import 'styles/inicio.css';
import shop from 'img/shop.jpg';

function Inicio() {
    return (
        <main>
            <section id="containerSection">
                <h1 id="tittle">¡Bienvenido a Fanta-Stick-Store!</h1>
                <div id="content">
                    <div className="item"><img src={shop} alt="shop"></img></div>
                    <div className="item">
                        <p>Este proyecto es hecho por el Fanta-Stick-Org Team 👩🏻‍💻👨🏻‍💻 <br></br>
                            para llevar a cabo la gestión de las ventas físicas y online ✅. <br></br><br></br>
                            Cordialmente. @<a href="https://github.com/Fanta-Stick-Org/Fanta-Stick-Store" id='linkFantaStick'>Fanta-Stick
                                Team</a> ❤.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Inicio;
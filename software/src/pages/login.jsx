import 'styles/login.css';
/* import scriptLogin from '../js/login'; */
import logo from 'img/Logo azul.png';

const Login = () => {
    return (
        <div id="container">
            <header id="logo">
                <img src={logo} alt="Logo" width="600" height="400"></img>
            </header>
            <section id="formulario">
                <form className="form" /* method="POST" */ id="login-form">
                    <div className="inline">
                        <label className="texto" for="username"><i className="fas fa-user"> </i> Usuario </label>
                        <input className="input" name="username" type="username" id="username" placeholder="Ingrese su usuario"></input>
                    </div>
                    <div className="inline">
                        <label className="texto" for="password"><i className="fas fa-user-secret"> </i> Contraseña </label>
                        <input className="input" name="password" type="password" id="password" placeholder="ingrese su contraseña"></input>
                        <span className="texto">No compartas tu contraseña con nadie :).</span>
                    </div>
                    <div className="inline">
                        <button className="boton" value="Login" id="login-form-submit" type="submit">Ingresar <i className="fas fa-chevron-right"></i></button>
                    </div>
                </form>
            </section>
            <footer id="footerLogin">
                <a className="link"
                    href="https://github.com/Fanta-Stick-Org/Fanta-Stick-Store.git">Copyright-Fanta-Stick-Org-2021</a>
            </footer>
            {/* <script src={scriptLogin}></script> */}
        </div>
    )
}

export default Login;

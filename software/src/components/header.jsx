import 'styles/header.css';
import logo from 'img/Logo blanco.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header id='headerMain'>
            <div className="logo">
            <Link to='/main-page'><img src={logo} alt="Logo-Fanta-Stick-Org"></img></Link>
            </div>
            <nav className="menu">
                <ul>
                    <li><Link to='/main-page'>Inicio</Link></li>
                    <li><Link to='/main-page'>Productos</Link>
                        <ul>
                            <li><Link to='/registerProduct'>Registrar</Link></li>
                            <li><Link to='/listProducts'>Listar</Link></li>
                            <li><Link to='/updateProduct'>Actualizar</Link></li>
                        </ul>
                    </li>
                    <li><a href="#">Ventas</a>
                        <ul>
                            <li><a href="#">Registrar</a></li>
                            <li><a href="#">Listar</a></li>
                            <li><a href="#">Actualizar</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Usuarios</a>
                        <ul>
                            <li><a href="#">Registrar</a></li>
                            <li><a href="#">Listar</a></li>
                            <li><a href="#">Actualizar</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
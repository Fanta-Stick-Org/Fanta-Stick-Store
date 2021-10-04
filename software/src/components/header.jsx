import 'styles/header.css';
import logo from 'img/Logo blanco.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header id='headerMain'>
                <div className="logo">
                    <Link to='/'><img src={logo} alt="Logo-Fanta-Stick-Org"></img></Link>
                </div>
                <nav className="menu">
                    <ul>
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/'>Productos</Link>
                            <ul>
                                <li><Link to='/registerProduct'>Registrar</Link></li>
                                <li><Link to='/listProducts'>Listar</Link></li>
                                <li><Link to='/updateProduct'>Actualizar</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/main-page'>Ventas</Link>
                            <ul>
                                <li><Link to='/registerProduct'>Registrar</Link></li>
                                <li><Link to='/listProducts'>Listar</Link></li>
                                <li><Link to='/updateProduct'>Actualizar</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/main-page'>Usuarios</Link>
                            <ul>
                                <li><Link to='/registerProduct'>Registrar</Link></li>
                                <li><Link to='/listProducts'>Listar</Link></li>
                                <li><Link to='/updateProduct'>Actualizar</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;

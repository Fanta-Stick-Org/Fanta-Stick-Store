function vistaHeader(params) {
    return(
        <header>
        <div class="logo">
            <img src="../src/img/Logo blanco.png" alt="Logo-Fanta-Stick-Org"></img>
        </div>

        <nav class="menu">
            <ul>
                <li><a href="../vistas/inicio.html">Inicio</a></li>
                <li><a href="#">Productos</a>
                    <ul>
                        <li><a href="../vistas/registerProduct.html">Registrar</a></li>
                        <li><a href="../vistas/listProducts.html">Listar</a></li>
                        <li><a href="../vistas/updateProduct.html">Actualizar</a></li>
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

export default vistaHeader;
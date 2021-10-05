import 'styles/listProducts.css';

const ListProducts = () => {
    return (
        <section className="containerSection">
            <h1 id="tittle">Listado de Productos</h1>
            <div className="formSubmitList">
                <button value="Login" id="btn-list-submit" type="submit">Listar</button>
            </div>
            <div className='table-products-container'>
                <table id="table-list-products">
                    <thead>
                        <tr>
                            <th>Id Producto</th>
                            <th>Descripción</th>
                            <th>Valor Unitario</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>Mouse Inalámbrico</td>
                            <td>$120.000</td>
                            <td>Disponible</td>
                        </tr>
                        <tr>
                            <td>002</td>
                            <td>Teclado Inalámbrico</td>
                            <td>$90.000</td>
                            <td>Disponible</td>
                        </tr>
                        <tr>
                            <td>003</td>
                            <td>Monitor 1920x1080</td>
                            <td>$410.000</td>
                            <td>No Disponible</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default ListProducts;
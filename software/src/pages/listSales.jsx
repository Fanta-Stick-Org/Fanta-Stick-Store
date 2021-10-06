import 'styles/listSales.css';

const ListSales = () => {
    return (
        <section className="containerSection">
            <h1 id="tittle">Listado de Ventas</h1>
            <div className="formSubmitList">
                <button value="Login" id="btn-list-submit" type="submit">Listar</button>
                <input className="inputListSales" type="text" id="totalSale" name="totalSale" placeholder="Total Venta" value="100.000" readOnly></input>
            </div>
            <div className='table-products-container'>
                <table id="table-list-products">
                    <thead>
                        <tr>
                            <th>Codigo del Producto</th>
                            <th>Descripción del Producto</th>
                            <th>Cantidad</th>
                            <th>Precio Unitario</th>
                            <th>Precio Total</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>Mouse Inalámbrico</td>
                            <td>1</td>
                            <td>$120.000</td>
                            <td>$120.000</td>
                            <td><button className='btn-opciones'>Actualizar</button></td>
                        </tr>
                        <tr>
                            <td>002</td>
                            <td>Teclado Inalámbrico</td>
                            <td>1</td>
                            <td>$90.000</td>
                            <td>$90.000</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>003</td>
                            <td>Monitor 1920x1080</td>
                            <td>2</td>
                            <td>$410.000</td>
                            <td>$820.000</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default ListSales;
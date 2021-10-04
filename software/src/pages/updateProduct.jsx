import 'styles/updateProduct.css';

function UpdateProduct() {
    return (
        <main>
            <section id="containerSection">
                <h1 id="tittle">Actualizar Productos</h1>
                    <form action="" id="form-update-products">
                        <div class="formRegister">
                            <label class="textoUpdate" for="idProducto">Id Producto </label>
                            <input class="input" name="idProducto" type="text" id="idProducto" placeholder="Ej: 001"></input>
                        </div>
                        <div class="formRegister">
                            <label class="textoUpdate" for="descripcion">Descripción </label>
                            <input class="input" name="descripcion" type="text" id="descripcion"
                                placeholder="Ej: Modelo, Marca..."></input>
                        </div>
                        <div class="formRegister">
                            <label class="textoUpdate" for="valorUnitario">Valor Unitario </label>
                            <input class="input" name="valorUnitario" type="number" id="valorUnitario" placeholder="Ej: 10.000"></input>
                        </div>
                        <div class="formRegister">
                            <label class="textoUpdate" for="estado">Estado </label>
                            <select class="input" name="estado" type="text" id="estado" placeholder="Ej: 001">
                                <option value="disponible">Disponible</option>
                                <option value="noDisponible">No Disponible</option>
                            </select>
                        </div>
                    </form>
                        <div class="formSubmit">
                            <button value="Login" id="update-form-submit" type="submit">Actualizar</button>
                        </div>
                    </section>
                </main>
                )
}

                export default UpdateProduct;
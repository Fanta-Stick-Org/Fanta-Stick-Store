import '../styles/general.css';

const FormProduct = () => {
    return (
        <form action="" id="form-register-products">
            <div className="form">
                <label className="texto" for="idProducto">Id Producto </label>
                <input className="input" name="idProducto" type="text" id="idProducto" placeholder="Ej: 001" required></input>
            </div>
            <div className="form">
                <label className="texto" for="descripcion">Descripción </label>
                <input className="input" name="descripcion" type="text" id="descripcion"
                    placeholder="Ej: Modelo, Marca..." required></input>
            </div>
            <div className="form">
                <label className="texto" for="valorUnitario">Valor Unitario </label>
                <input className="input" name="valorUnitario" type="number" id="valorUnitario" placeholder="Ej: 10.000" required></input>
            </div>
            <div className="form">
                <label className="texto" for="estado">Estado </label>
                <select className="input" name="estado" type="text" id="estado" required>
                    <option>Seleccione...</option>
                    <option value="disponible">Disponible</option>
                    <option value="noDisponible">No Disponible</option>
                </select>
            </div>
        </form>
    )
}

export default FormProduct;



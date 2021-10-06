import '../styles/general.css';

const FormSales = () => {
    return (
        <form action="" name="NuevaVenta" id="newSaleForm" method="">
            <div className="grid-container">
                <div className="grid-item">
                    <label for="idSale" className="texto">Codigo de Venta</label>
                    <input type="text" className="input" name="idSale" placeholder="Id de Venta"></input>
                </div>
                <div className="grid-item">
                    <label for="dateSale" className="texto">Fecha de venta </label>
                    <input type="datetime-local" className="input" name="dateSale" placeholder="Fecha de Venta"></input>
                </div>

                <div className="grid-item">
                    <label for="idSeller" className="texto">Codigo Vendedor</label>
                    <input type="text" id="idSeller" name="idSeller" placeholder="Id del Vendedor" className="input"></input><br />
                </div>

                <div className="grid-item">
                    <label for="stateSale" className="texto">Estado de la Venta</label><br />

                    <input type="radio" id="stateSaleCancel" name="stateSale" value="Cancelada" className="input"></input>
                    <label for="stateSaleCancel" className="texto"> Cancelada</label> <br />

                    <input type="radio" id="stateSalePend" name="stateSale" value="Pendiente" className="input"></input>
                    <label for="stateSalePend" className="texto"> Pendiente</label><br />

                    <input type="radio" id="stateSaleClosed" name="stateSale" value="Cerrada" className="input"></input>
                    <label for="stateSaleClosed" className="texto"> Cerrada</label><br />
                </div>

                <div className="grid-item">
                    <label for="idCustomer" className="texto">Codigo Cliente</label>
                    <input type="text" id="idCustomer" name="idCustomer" placeholder="Id del Cliente" className="input"></input>
                </div>
                <div className="grid-item">
                    <label for="nameCustumer" className="texto">Nombre del Cliente</label>
                    <input type="text" id="nameCustumer" name="nameCustumer" placeholder="Nombre del Cliente"
                        className="input"></input>
                </div>
            </div>


            <div className="grid-container-2">
                <div className="grid-item">
                    <label className="texto" for="idProduct">Codigo del Producto</label>
                    <input className="input" type="text" id="idProduct" name="idProduct" placeholder="Codigo del Producto"></input>
                </div>
                <div className="grid-item">
                    <label className="texto" for="nameProduct">Descripcion del Producto</label>
                    <input className="input" type="text" id="nameProduct" name="nameProduct" placeholder="Descripcion del Producto"></input>
                </div>
                <div className="grid-item">
                    <label className="texto" for="qtyProduct">Cantidad</label><br />
                    <input className="input" type="text" id="qtyProduct" name="qtyProduct" placeholder="Cantidad"></input>
                </div>
                <div className="grid-item">
                    <label className="texto" for="priceProduct">Precio Unitario</label>
                    <input className="input" type="text" id="priceProduct" name="priceProduct" placeholder="Precio Unitario"></input>
                </div>
                <div className="grid-item">
                    <label className="texto" for="priceProduct">Precio Total</label>
                    <input className="input" type="text" id="totalPriceProducts" name="totalPriceProducts" placeholder="Precio Total"></input>
                </div>
            </div>
            {/* <button className="button+">+</button>
            <br />
            
            <br /><br /> */}
        </form>
    )
}

export default FormSales;

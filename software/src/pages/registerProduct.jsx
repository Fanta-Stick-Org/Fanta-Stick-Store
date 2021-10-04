import 'styles/registerProduct.css';
import React from 'react'

const RegisterProduct = () => {
    return (
        <section id="containerSection">
            <h1 id="tittle">Registro de Productos</h1>
            <form action="" id="form-register-products">
                <div className="formRegister">
                    <label className="textoRegister" for="idProducto">Id Producto </label>
                    <input className="input" name="idProducto" type="text" id="idProducto" placeholder="Ej: 001"></input>
                </div>
                <div className="formRegister">
                    <label className="textoRegister" for="descripcion">Descripción </label>
                    <input className="input" name="descripcion" type="text" id="descripcion"
                        placeholder="Ej: Modelo, Marca..."></input>
                </div>
                <div className="formRegister">
                    <label className="textoRegister" for="valorUnitario">Valor Unitario </label>
                    <input className="input" name="valorUnitario" type="number" id="valorUnitario" placeholder="Ej: 10.000"></input>
                </div>
                <div className="formRegister">
                    <label className="textoRegister" for="estado">Estado </label>
                    <select className="input" name="estado" type="text" id="estado" placeholder="Ej: 001">
                        <option value="disponible">Disponible</option>
                        <option value="noDisponible">No Disponible</option>
                    </select>
                </div>
            </form>
            <div className="formSubmit">
                <button value="Login" id="register-form-submit" type="submit">Agregar</button>
            </div>
        </section>
    )
}

export default RegisterProduct;

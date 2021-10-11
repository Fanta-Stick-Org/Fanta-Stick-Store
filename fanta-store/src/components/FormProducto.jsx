import React, { useRef } from 'react'
import { ToastContainer } from 'react-toastify'; //para las alertas
import 'react-toastify/dist/ReactToastify.css';
import { registrarProductos } from 'utils/api';

const FormProducto = () => {

    const form = useRef(null);

    const submitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);

        const nuevoProducto = {};
        formData.forEach((value, key) => {
            nuevoProducto[key] = value;
        });

        console.log('el nuevo producto: ', nuevoProducto)

        registrarProductos(nuevoProducto);
    };

    return (
        <div className='flex sm:flex-col flex-row flex-nowrap justify-center sm:max-w-screen-sm h-full'>
            <form ref={form} onSubmit={submitForm} id="form-register-products">
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="idProducto">Id Producto </label>
                    <input name="name" type="text" className="inputGeneral"  placeholder="Ej: 0001" required></input>
                </div>
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="descripcion">Descripción </label>
                    <input name="brand" type="text" className="inputGeneral" placeholder="Ej: Producto marca tamaño" required></input>
                </div>
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="valorUnitario">Valor Unitario </label>
                    <input name="model" type="number" id="valorUnitario" min={1999} className="inputGeneral" placeholder="Ej: 10.000" required></input>
                </div>
                {/* <div className="formGeneral">
                    <label className="textoForm" htmlFor="estado">Estado </label>
                    <select name="estado" type="text" id="estado" defaultValue={0} required className="inputGeneral">
                        <option value={0} disabled>Seleccione...</option>
                        <option value="disponible">Disponible</option>
                        <option value="noDisponible">No Disponible</option>
                    </select>
                </div> */}
                <div className="formSubmit">
                    <button id="btn-form-submit" type="submit" className='btnGeneral'>Enviar</button>
                </div>
            </form>
            <ToastContainer position="bottom-right" autoClose={4000} closeOnClick />
        </div>
    )
}

export default FormProducto

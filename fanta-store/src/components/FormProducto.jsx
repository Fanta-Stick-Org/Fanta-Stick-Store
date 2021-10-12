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
            <form ref={form} onSubmit={submitForm} id="formRegister">
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="_id">Id Producto </label>
                    <input name="_id" type="text" className="inputGeneral" placeholder="Ej: 0001" required></input>
                </div>
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="descripcion">Descripción </label>
                    <input name="descripcion" type="text" className="inputGeneral" placeholder="Ej: Producto marca tamaño" required></input>
                </div>
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="valorUnitario">Valor Unitario </label>
                    <input name="valorUnitario" type="number" id="valorUnitario" min={0} className="inputGeneral" placeholder="Ej: 10000" required></input>
                </div>
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="estado">Estado </label>
                    <select name="estado" type="text" id="estado" defaultValue={0} className="inputGeneral" required>
                        <option value={0} disabled>Seleccione...</option>
                        <option value="Disponible">Disponible</option>
                        <option value="No Disponible">No Disponible</option>
                    </select>
                </div>
                <div className="formSubmit">
                    <button id="btn-form-submit" type="submit" className='btnGeneral'>Enviar</button>
                </div>
            </form>
            <ToastContainer position="bottom-right" autoClose={4000} closeOnClick />
        </div>
    )
}

export default FormProducto

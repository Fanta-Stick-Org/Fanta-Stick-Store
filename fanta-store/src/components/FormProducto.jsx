import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'; //para las alertas
import 'react-toastify/dist/ReactToastify.css';
import { registrarProductos } from 'utils/api/apiProductos';

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

        await registrarProductos({
            _id: nuevoProducto._id,
            descripcion: nuevoProducto.descripcion,
            valorUnitario: nuevoProducto.valorUnitario,
            estado: nuevoProducto.estado
        },

            (response) => {
                console.log(response.data);
                toast.success('Producto agregado con éxito!!');
            },

            (error) => {
                console.error(error);
                toast.error('Error agregando el producto');
            });
    };

    return (
        <div className='flex sm:flex-col flex-row flex-nowrap justify-center sm:max-w-screen-sm h-full'>
            <form ref={form} onSubmit={submitForm} id="formRegister">
                <div className='pt-8'>
                    <div className="formGeneral">
                        <label className="textoGeneral" htmlFor="_id">Id Producto </label>
                        <input name="_id" type="text" className="inputGeneral" placeholder="Ej: 0001" required></input>
                    </div>
                    <div className="formGeneral">
                        <label className="textoGeneral" htmlFor="descripcion">Descripción </label>
                        <input name="descripcion" type="text" className="inputGeneral" placeholder="Ej: Producto marca tamaño" required></input>
                    </div>
                    <div className="formGeneral">
                        <label className="textoGeneral" htmlFor="valorUnitario">Valor Unitario </label>
                        <input name="valorUnitario" type="number" id="valorUnitario" min={0} className="inputGeneral" placeholder="Ej: 10000" required></input>
                    </div>
                    <div className="formGeneral">
                        <label className="textoGeneral" htmlFor="estado">Estado </label>
                        <select name="estado" type="text" defaultValue={0} className="inputGeneral" required>
                            <option value={0} disabled>Seleccione...</option>
                            <option value="Disponible">Disponible</option>
                            <option value="No Disponible">No Disponible</option>
                        </select>
                    </div>
                </div>
                <div className='pt-8 flex flex-col items-center'>
                    <div className="formSubmit">
                        <button id="btn-form-submit" type="submit" className='btnGeneral'>Enviar</button>
                    </div>
                </div>
            </form>
            <ToastContainer position="bottom-right" autoClose={4000} closeOnClick />
        </div>
    )
}

export default FormProducto

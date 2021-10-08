import React, { /* useEffect, useState, */ useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'; //para las alertas
import 'react-toastify/dist/ReactToastify.css';

const FormProducto = () => {


    /* useEffect(() => {
        console.log('hola soy useeffect y se ejecuta al inicio porque el array esta vacio');
    },[]) // se ejecuta al inicio*/

    /* useEffect(() => {
        console.log('el valor de la variable es ', idProducto); //necesita un estada para cada variable
    }, [idProducto]) //guarda el valor de la variable en cada camibio */

    const form = useRef(null);
    
    const submitForm = (e) => {
        e.preventDefault(); 
        const formData = new FormData(form.current);
        const nuevoproducto = {}; 
        formData.forEach((value, key) => {
            nuevoproducto[key] = value;
        })
        //se guarda en la base de datos si sale bien el toast debe mostrar .success
        console.log('datos guardados', nuevoproducto)
        toast.success('Producto registrado con éxito!!');
        //se guarda en la base de datos si sale error el toast debe cambiar a .error
    };

    return (
        <div className='flex sm:flex-col flex-row flex-nowrap justify-center sm:max-w-screen-sm h-full'>
            <form ref={form} onSubmit={submitForm} id="form-register-products">
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="idProducto">Id Producto </label>
                    <input name="idProducto" type="text" id="idProducto" className="inputGeneral" required placeholder="Ej: 0001"></input>
                </div>
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="descripcion">Descripción </label>
                    <input name="descripcion" type="text" id="descripcion" className="inputGeneral" placeholder="Ej: Producto marca tamaño" required></input>
                </div>
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="valorUnitario">Valor Unitario </label>
                    <input name="valorUnitario" type="number" id="valorUnitario" min={0} className="inputGeneral" placeholder="Ej: 10.000" required></input>
                </div>
                <div className="formGeneral">
                    <label className="textoForm" htmlFor="estado">Estado </label>
                    <select name="estado" type="text" id="estado" defaultValue={0} required className="inputGeneral">
                        <option value={0} disabled>Seleccione...</option>
                        <option value="disponible">Disponible</option>
                        <option value="noDisponible">No Disponible</option>
                    </select>
                </div>
                <div className="formSubmit">
                    <button onClick={submitForm} id="btn-form-submit" type="button" className='btnGeneral'>Enviar</button>
                </div>
            </form>
            <ToastContainer position="bottom-right" autoClose={2500}/>
        </div>
    )
}

export default FormProducto

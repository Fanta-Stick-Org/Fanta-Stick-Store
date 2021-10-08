import React from 'react'
import FormProducto from 'components/FormProducto'

const ActuProductos = () => {
    return (
        <div className='flex flex-col sm:flex-row flex-nowrap justify-center'>
            <section className="flex flex-col">
                <h1 className="tituloGeneral">Actualizar Productos</h1>
                <FormProducto />
            </section>
        </div>
    )
}

export default ActuProductos

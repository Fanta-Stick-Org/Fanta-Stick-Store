import React from 'react'
import FormActuProducto from 'components/FormActuProducto'

const ActuProductos = () => {
    return (
        <>
            <div className='px-6'>
                <a href='/admin/productos' className='btnGeneralNav'><i className="fas fa-arrow-left"></i></a>
            </div>
            <div className='flex flex-col sm:flex-row flex-nowrap justify-center'>
                <section className="flex flex-col">
                    <h1 className="tituloGeneral">Actualizar Productos</h1>
                    <FormActuProducto />
                </section>
            </div>
        </>
    )
}

export default ActuProductos
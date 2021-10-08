import React from 'react'
import FormVentas from 'components/FormVentas'

const ActuVentas = () => {
    return (
        <>
            <div className='px-6'>
                <a href='/admin/ventas' className='btnGeneralNav'><i className="fas fa-arrow-left"></i></a>
            </div>
            <div className='flex flex-col sm:flex-row flex-nowrap justify-center'>
                <section className="flex flex-col">
                    <h1 className="tituloGeneral">Actualizar Ventas</h1>
                    <FormVentas />
                </section>
            </div>
        </>
    )
}

export default ActuVentas

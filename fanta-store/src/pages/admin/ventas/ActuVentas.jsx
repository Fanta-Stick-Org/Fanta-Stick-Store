import React from 'react'
import FormVentas from 'components/FormVentas'

const ActuVentas = () => {
    return (
        <div className='flex flex-col sm:flex-row flex-nowrap justify-center'>
            <section className="flex flex-col">
                <h1 className="tituloGeneral">Actualizar Ventas</h1>
                <FormVentas />
            </section>
        </div>
    )
}

export default ActuVentas

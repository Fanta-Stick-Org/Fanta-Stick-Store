import React from 'react'
import FormVentas from 'components/FormVentas'

const RegisVentas = () => {
    return (
        <div className='flex flex-col sm:flex-row flex-nowrap justify-center'>
            <section className="flex flex-col">
                <h1 className="tituloGeneral">Registro de Productos</h1>
                <FormVentas/>
            </section>
        </div>
    )
}

export default RegisVentas

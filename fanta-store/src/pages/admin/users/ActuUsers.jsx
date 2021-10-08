import React from 'react'
import FormUsers from 'components/FormUsers'

const ActuProductos = () => {
    return (
        <div className='flex flex-col sm:flex-row flex-nowrap justify-center'>
            <section className="flex flex-col">
                <h1 className="tituloGeneral">Actualizar Usuario</h1>
                <FormUsers />
            </section>
        </div>
    )
}

export default ActuProductos

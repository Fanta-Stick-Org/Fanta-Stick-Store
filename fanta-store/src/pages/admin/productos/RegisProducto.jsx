import React from 'react'
import FormProducto from 'components/FormProducto'

const RegisProducto = () => {
    return (
        <div className='flex flex-col sm:flex-row flex-nowrap justify-center'>
            <section className="flex flex-col">
                <h1 className="tituloGeneral">Registro de Productos</h1>
                <FormProducto />
            </section>
        </div>
    )
}

export default RegisProducto

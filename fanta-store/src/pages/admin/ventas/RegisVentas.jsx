import React from 'react'
import FormVentas from 'components/FormVentas'

const RegisVentas = () => {
    return (
        <div>
            <section className="flex flex-col w-96">
                <h1 className="tituloGeneral">Registro de Productos</h1>
                <FormVentas/>
            </section>
        </div>
    )
}

export default RegisVentas

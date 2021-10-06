import React, { useEffect, useState } from 'react'
import FormProducto from 'components/FormProducto'

const ActuProductos = () => {
    return (
        <div>
            <section className="flex flex-col w-96">
                <h1 className="tituloGeneral">Actualizar Productos</h1>
                <FormProducto />
            </section>
        </div>
    )
}

export default ActuProductos

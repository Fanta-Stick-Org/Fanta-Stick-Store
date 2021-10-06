import React, { useEffect, useState } from 'react'
import FormProducto from 'components/FormProducto'

const RegisProducto = () => {
    return (
        <div>
            <section className="flex flex-col w-96">
                <h1 className="tituloGeneral">Registro de Productos</h1>
                <FormProducto />
            </section>
        </div>
    )
}

export default RegisProducto

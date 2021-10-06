import React, { useEffect, useState } from 'react'
import FormUsers from 'components/FormUsers'

const ActuProductos = () => {
    return (
        <div>
            <section className="flex flex-col w-96">
                <h1 className="tituloGeneral">Actualizar Usuario</h1>
                <FormUsers />
            </section>
        </div>
    )
}

export default ActuProductos

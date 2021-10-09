import React from 'react'
import FormUsers from 'components/FormUsers'

const ActuProductos = () => {
    return (
        <>
            <div className='px-6'>
                <a href='/admin/usuarios' className='btnGeneralNav'><i className="fas fa-arrow-left"></i></a>
            </div>
            <div className='flex flex-col sm:flex-row flex-nowrap justify-center'>
                <section className="flex flex-col">
                    <h1 className="tituloGeneral">Actualizar Usuario</h1>
                    <FormUsers />
                </section>
            </div>
        </>
    )
}

export default ActuProductos

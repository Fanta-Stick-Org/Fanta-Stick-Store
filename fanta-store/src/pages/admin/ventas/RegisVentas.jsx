import React from 'react'
import FormVentas from 'components/FormVentas'

const RegisVentas = () => {
    return (
        <>
            <div className='px-6'>
                <a href='/admin/ventas/' className='btnGeneralNav'><i className="fas fa-arrow-left"></i></a>
            </div>
            <div className='flex flex-col sm:flex-row flex-nowrap justify-center'>
                <section className="flex flex-col">
                    <h1 className="tituloGeneral">Registro de Ventas</h1>
                    <FormVentas />
                </section>
            </div>
        </>
    )
}

export default RegisVentas

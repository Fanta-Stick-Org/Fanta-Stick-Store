import React from 'react'
import { Link } from 'react-router-dom'
import FormVentas from 'components/FormVentas'

const RegisVentas = () => {
    return (
        <>
            <div className='px-6'>
                <Link to='/admin/ventas/' className='btnGeneralNav'><i className="fas fa-arrow-left"></i></Link>
            </div>
            <div className='flex flex-col sm:flex-row flex-nowrap justify-center'>
                <section className="flex flex-col w-full items-center">
                    <h1 className="tituloGeneral">Registro de Ventas</h1>
                    <FormVentas />
                </section>
            </div>
        </>
    )
}

export default RegisVentas

import React/* , {useEffect, useState} */ from 'react'

const SidebarResponsive = () => {
   /*  const [mostrarNavegacion, setMostrarNavegacion] = useState(false); */
    return (
        <div className='sm:hidden bg-blue-200' /* onClick={setMostrarNavegacion(!mostrarNavegacion)} */>
            <i className={`fas fa-bars hover:text-yellow-600`}></i> {/* ${mostrarNavegacion ? 'times' : 'bars'} */}
            {/* {mostrarNavegacion &&
                <div>
                    mostrar otra cosa
                </div>
            } */}
            
        </div>
    )
}

export default SidebarResponsive

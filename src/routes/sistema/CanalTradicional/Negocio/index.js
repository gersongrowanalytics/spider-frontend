import React from 'react'
import AppCanalTradicional from '../App/index'
import './Estilos/Negocio.css'

const Negocio = () => {
    return (
        <div>
            <AppCanalTradicional/>
            <div style={{marginLeft:'-30px', position: 'relative'}}>
                <iframe
                    width="102%"
                    height="900"
                    src="https://app.powerbi.com/view?r=eyJrIjoiMDEwODkwZWItYTZmNS00YjU2LWJlM2MtMTg1OTUwNzMyN2M4IiwidCI6IjFkZjQ2ODhjLWI5MTUtNDEwMy05OGMwLTNhMzY4ZmIyOTNlOCJ9"
                    frameborder="0"
                ></iframe>
                <div id="taparIzqcdistribuidora">
                    
                </div>
                <div id="taparDerechaCdistribuidora">

                </div>
            </div>
        </div>
    )
}

export default Negocio

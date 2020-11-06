import React from 'react'
import AppCanalTradicional from '../App/index'
import './Estilos/Negocio.css'

const Negocio = () => {
    return (
        <div>
            <AppCanalTradicional/>
            <div style={{marginLeft:'-30px', position: 'relative'}}>
                <iframe
                    width="103%"
                    height="900"
                    src="https://app.powerbi.com/view?r=eyJrIjoiNDY0ZGZmNDQtOWE4MS00YzIwLWIzN2UtZDcwMGNmMmU4M2Q3IiwidCI6IjFkZjQ2ODhjLWI5MTUtNDEwMy05OGMwLTNhMzY4ZmIyOTNlOCJ9&pageName=ReportSection7e1d8be48676a8413c0d"
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

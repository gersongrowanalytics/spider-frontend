import React from 'react'
import AppCanalTradicional from '../App/index'
import './comercial.css'
const index = () => {
    return (
        <div>
            <AppCanalTradicional/>
            <div style={{marginLeft:'-30px', position: 'relative'}}>
                <iframe
                    width="103%"
                    height="900"
                    src="https://app.powerbi.com/view?r=eyJrIjoiMDEwODkwZWItYTZmNS00YjU2LWJlM2MtMTg1OTUwNzMyN2M4IiwidCI6IjFkZjQ2ODhjLWI5MTUtNDEwMy05OGMwLTNhMzY4ZmIyOTNlOCJ9&pageName=ReportSection28e304cb131872a6db42"
                    frameborder="0"
                ></iframe>
                {/* <div id="botonComercial">
                    BOTON
                </div> */}
                <div id="taparIzqcomercial">
                    
                </div>
                <div id="taparDerechaComercial">

                </div>
            </div>
        </div>
    )
}

export default index

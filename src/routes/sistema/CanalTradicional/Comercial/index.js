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
                    src="https://app.powerbi.com/view?r=eyJrIjoiMDRhYjA4ZjEtYzAyMC00ZGU1LTkzNDgtNTZkNWJjMmEyYzA4IiwidCI6IjFkZjQ2ODhjLWI5MTUtNDEwMy05OGMwLTNhMzY4ZmIyOTNlOCJ9"
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

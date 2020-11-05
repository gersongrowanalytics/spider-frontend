import React from 'react'
import AppCanalTradicional from '../App/index'
import '../Distribuidora/distribuidora.css'

const index = () => {
    return (
        <div>
            <AppCanalTradicional/>
            <div style={{marginLeft:'-30px', position: 'relative'}}>
                <iframe
                    width="102%"
                    height="900"
                    src="https://app.powerbi.com/view?r=eyJrIjoiODI3ODdhMjAtOTk1YS00Yzc5LTg0YWUtODY4MDJlNzQ3ZjJmIiwidCI6IjFkZjQ2ODhjLWI5MTUtNDEwMy05OGMwLTNhMzY4ZmIyOTNlOCJ9&pageName=ReportSection035f5f0dfb9e0055320e"
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

export default index
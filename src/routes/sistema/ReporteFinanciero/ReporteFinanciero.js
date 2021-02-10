import React from 'react'

const ReporteFinanciero = () => {
    return (
        <div>
            <div style={{marginLeft:'-30px', marginRight:'-30px', marginTop:'-30px', position: 'relative'}}>
                <iframe
                    width="100%"
                    height="1350"
                    src = "https://app.powerbi.com/view?r=eyJrIjoiNjdkOTYyNzUtM2UxYy00MmM1LTg2YjMtZGU1NDQ0MDJlZTQ5IiwidCI6IjFkZjQ2ODhjLWI5MTUtNDEwMy05OGMwLTNhMzY4ZmIyOTNlOCJ9&pageName=ReportSection"
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

export default ReporteFinanciero

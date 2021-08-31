import React from 'react'
import Carousel from './Carousel/index'
import IconoKpi from 'assets/images/dashboard/kpi.png'

const App = () => {

    const canales = [
        {
            nombre  : ["Big Bets Bolivia", ""],
            imagen  : "https://backend-spider-kimberly.grow-corporate.com/Spider/img/CanalTradicional/negocio.png",
            url     : "big-bets-bolivia"
        },

        {
            nombre  : ["Prioridades Bo", ""],
            imagen  : IconoKpi,
            url     : "prioridades-bo"
        },
        {
            nombre  : ["Reporte Financiero BO", ""],
            imagen  : 'https://backend-spider-kimberly.grow-corporate.com/Spider/img/CanalTradicional/otros.png',
            url     : "reporte-financiero-bo"
        },
    ]

    return (
        <div>
            <Carousel 
                heading = "Example Slider"
                slides  = {canales} 
            />
            <div style={{marginBottom: '50px'}}></div>
        </div>
    )
}

export default App

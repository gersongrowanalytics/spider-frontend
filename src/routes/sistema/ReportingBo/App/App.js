import React from 'react'
import Carousel from './Carousel/index'

const App = () => {

    const canales = [
        {
            nombre  : ["Big Bets Bolivia", ""],
            imagen  : "https://backend-spider-kimberly.grow-corporate.com/Spider/img/CanalTradicional/negocio.png",
            url     : "big-bets-bolivia"
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

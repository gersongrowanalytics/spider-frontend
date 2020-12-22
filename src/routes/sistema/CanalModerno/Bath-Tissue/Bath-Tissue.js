import React from 'react'
import CarouselCanalModerno from 'components/Sistema/CanalModerno/Infant-Child/Carousel/Carousel'
import 'styles/sistema/CanalModerno/Infant-Child/Infant-Child.css'

const BathTissue = () => {
    return (
        <div>
            <CarouselCanalModerno/>
            <div style={{marginLeft:'-30px', marginRight:'-30px', position: 'relative'}}>
                <iframe
                    width="100%"
                    height="1150"
                    src = "https://app.powerbi.com/view?r=eyJrIjoiZDg2ZjZiMjMtODBiYy00YTc5LThjMTQtZWM3ZjUyZDRlN2IyIiwidCI6IjFkZjQ2ODhjLWI5MTUtNDEwMy05OGMwLTNhMzY4ZmIyOTNlOCJ9"
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

export default BathTissue

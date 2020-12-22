import React from 'react'
import CarouselCanalModerno from 'components/Sistema/CanalModerno/Infant-Child/Carousel/Carousel'
import 'styles/sistema/CanalModerno/Infant-Child/Infant-Child.css'

const InfantChild = () => {
    return (
        <div>
            <CarouselCanalModerno/>
            <div style={{marginLeft:'-30px', marginRigth: '-30px',position: 'relative'}}>
                <iframe
                    width="100%"
                    height="1070"
                    src="https://app.powerbi.com/view?r=eyJrIjoiMzBhNTFhYzYtOTMzMS00MWE0LWIwM2MtYmViNzkxZGMwMDYzIiwidCI6IjFkZjQ2ODhjLWI5MTUtNDEwMy05OGMwLTNhMzY4ZmIyOTNlOCJ9"
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

export default InfantChild

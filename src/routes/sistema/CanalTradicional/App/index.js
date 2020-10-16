import React from 'react'
import './Estilos/index.css'
import Carousel from './Carousel/index'

const AppCanalTradicional = () => {


    /**
     * CAROUSEL
     * http://backs.gavsistemas.com/Spider/img/CanalTradicional/comercial.png
     * http://backs.gavsistemas.com/Spider/img/CanalTradicional/distribuidora.png
     * http://backs.gavsistemas.com/Spider/img/CanalTradicional/negocio.png
     * http://backs.gavsistemas.com/Spider/img/CanalTradicional/otros.png
     * http://backs.gavsistemas.com/Spider/img/CanalTradicional/tendero.png
     * 
     * 
     * CATEGORIAS
     * http://backs.gavsistemas.com/Spider/img/Categorias/CanalModerno.png
     * http://backs.gavsistemas.com/Spider/img/Categorias/CanalTradicional.png
     * http://backs.gavsistemas.com/Spider/img/Categorias/Conveni.png
     * http://backs.gavsistemas.com/Spider/img/Categorias/Ecommerce.png
     * http://backs.gavsistemas.com/Spider/img/Categorias/TradeMarketing.png
     * 
     * 
     * ICONOS DE CATEGORIAS
     * http://backs.gavsistemas.com/Spider/img/Categorias/Iconos/CanalModerno.png
     * http://backs.gavsistemas.com/Spider/img/Categorias/Iconos/CanalTradicional.png
     * http://backs.gavsistemas.com/Spider/img/Categorias/Iconos/Convenience.png
     * http://backs.gavsistemas.com/Spider/img/Categorias/Iconos/Ecommerce.png
     * http://backs.gavsistemas.com/Spider/img/Categorias/Iconos/TradeMarketing.png
     * 
     * 
     * 
     */

    const canales = [
        {
            nombre  : "Negocio",
            imagen  : "http://backs.gavsistemas.com/Spider/img/CanalTradicional/negocio.png",
            url     : "negocio"
        },
        {
            nombre  : "Comercial",
            imagen  : "http://backs.gavsistemas.com/Spider/img/CanalTradicional/comercial.png",
            url     : "comercial"
        },
        {
            nombre  : "Distribuidora",
            imagen  : "http://backs.gavsistemas.com/Spider/img/CanalTradicional/distribuidora.png",
            url     : "distribuidora"
        },
        {
            nombre  : "Tendero",
            imagen  : "http://backs.gavsistemas.com/Spider/img/CanalTradicional/tendero.png",
            url     : "tendero"
        },
        {
            nombre  : "Otros",
            imagen  : "http://backs.gavsistemas.com/Spider/img/CanalTradicional/otros.png",
            url     : "otros"
        }
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

export default AppCanalTradicional

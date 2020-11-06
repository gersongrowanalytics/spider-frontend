import React from 'react'
import './Estilos/index.css'
import Carousel from './Carousel/index'

const AppCanalTradicional = () => {


    /**
     * CAROUSEL
     * https://backend-spider-kimberly.grow-corporate.com/Spider/img/CanalTradicional/comercial.png
     * https://backend-spider-kimberly.grow-corporate.com/Spider/img/CanalTradicional/distribuidora.png
     * https://backend-spider-kimberly.grow-corporate.com/Spider/img/CanalTradicional/negocio.png
     * https://backend-spider-kimberly.grow-corporate.com/Spider/img/CanalTradicional/otros.png
     * https://backend-spider-kimberly.grow-corporate.com/Spider/img/CanalTradicional/tendero.png
     * 
     * 
     * CATEGORIAS
     * https://backend-spider-kimberly.grow-corporate.com/Spider/img/Categorias/CanalModerno.png
     * https://backend-spider-kimberly.grow-corporate.com/Spider/img/Categorias/CanalTradicional.png
     * https://backend-spider-kimberly.grow-corporate.com/Spider/img/Categorias/Conveni.png
     * https://backend-spider-kimberly.grow-corporate.com/Spider/img/Categorias/Ecommerce.png
     * https://backend-spider-kimberly.grow-corporate.com/Spider/img/Categorias/TradeMarketing.png
     * 
     * 
     * ICONOS DE CATEGORIAS
     * https://backend-spider-kimberly.grow-corporate.com/Spider/img/Categorias/Iconos/CanalModerno.png
     * https://backend-spider-kimberly.grow-corporate.com/Spider/img/Categorias/Iconos/CanalTradicional.png
     * https://backend-spider-kimberly.grow-corporate.com/Spider/img/Categorias/Iconos/Convenience.png
     * https://backend-spider-kimberly.grow-corporate.com/Spider/img/Categorias/Iconos/Ecommerce.png
     * https://backend-spider-kimberly.grow-corporate.com/Spider/img/Categorias/Iconos/TradeMarketing.png
     * 
     * 
     * 
     */

    const canales = [
        {
            nombre  : "Negocio",
            imagen  : "https://backend-spider-kimberly.grow-corporate.com/Spider/img/CanalTradicional/negocio.png",
            url     : "negocio"
        },
        {
            nombre  : "Comercial YTD",
            imagen  : "https://backend-spider-kimberly.grow-corporate.com/Spider/img/CanalTradicional/comercial.png",
            url     : "comercial"
        },
        {
            nombre  : "Distribuidora",
            imagen  : "https://backend-spider-kimberly.grow-corporate.com/Spider/img/CanalTradicional/distribuidora.png",
            url     : "distribuidora"
        },
        {
            nombre  : "Tendero",
            imagen  : "https://backend-spider-kimberly.grow-corporate.com/Spider/img/CanalTradicional/tendero.png",
            url     : "tendero"
        },
        {
            nombre  : "Otros",
            imagen  : "https://backend-spider-kimberly.grow-corporate.com/Spider/img/CanalTradicional/otros.png",
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

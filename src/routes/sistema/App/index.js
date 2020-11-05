import React from 'react'
import './Estilos/index.css'
import Carousels from './Carousel/index'
import { Card, Carousel } from 'antd';

const AppCategorias = () => {


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
     * 
     * http://backs.gavsistemas.com/Spider/img/Categorias/Iconos/CanalModerno.png
     * http://backs.gavsistemas.com/Spider/img/Categorias/Iconos/CanalTradicional.png
     * http://backs.gavsistemas.com/Spider/img/Categorias/Iconos/Convenience.png
     * http://backs.gavsistemas.com/Spider/img/Categorias/Iconos/Ecommerce.png
     * http://backs.gavsistemas.com/Spider/img/Categorias/Iconos/TradeMarketing.png
     * 
     * 
     * 
     */

    const categoriasPromociones  = [
        {
            catnombre       : "Canal Moderno",
            catimagenfondo  : "http://backs.gavsistemas.com/Spider/img/Categorias/CanalModerno.png",
            caticonohover   : "http://backs.gavsistemas.com/Spider/img/Categorias/Iconos/CanalModerno.png",
            catcolorhover   : "255, 61, 0, 0.8",
            catcolor        : "#FF3D00",
            nombreUrl       : "canalModerno"
        },
        {
            catnombre       : "Canal Tradicional",
            catimagenfondo  : "http://backs.gavsistemas.com/Spider/img/Categorias/CanalTradicional.png",
            caticonohover   : "http://backs.gavsistemas.com/Spider/img/Categorias/Iconos/CanalTradicional.png",
            catcolorhover   : "33, 61, 167, 0.8",
            catcolor        : "#213DA7",
            nombreUrl       : "canalTradicional/negocio"
        },
        {
            catnombre       : "Convenience Store",
            catimagenfondo  : "http://backs.gavsistemas.com/Spider/img/Categorias/Conveni.png",
            caticonohover   : "http://backs.gavsistemas.com/Spider/img/Categorias/Iconos/Convenience.png",
            catcolorhover   : "67, 188, 139, 0.8",
            catcolor        : "#00BE7A",
            nombreUrl       : "convenienceStore"
        },
        {
            catnombre       : "Ecommerce",
            catimagenfondo  : "http://backs.gavsistemas.com/Spider/img/Categorias/Ecommerce.png",
            caticonohover   : "http://backs.gavsistemas.com/Spider/img/Categorias/Iconos/Ecommerce.png",
            catcolorhover   : "65, 57, 78, 0.8",
            catcolor        : "#41394E",
            nombreUrl       : "ecommerce"
        },
        {
            catnombre       : "Trade Marketing",
            catimagenfondo  : "http://backs.gavsistemas.com/Spider/img/Categorias/TradeMarketing.png",
            caticonohover   : "http://backs.gavsistemas.com/Spider/img/Categorias/Iconos/TradeMarketing.png",
            catcolorhover   : "210, 16, 68, 0.8",
            catcolor        : "#D21044",
            nombreUrl       : "tradeMarketing"
        }
    ]

    const seleccionarCategoria = async (scaid, posicion) =>  {
        console.log('click')
    }

    const seleccionoPromocion    = false
    const deseleccionarCategoria = async () => {
        
    }

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

      function onChange(a, b, c) {
        console.log(a, b, c);
      }

    return (
        <div>
            <div id="contenedoraSliderCategorias">
                <Carousel afterChange={onChange}>
                    <div style={{
                    }}>
                        <div style={{
                            backgroundImage: "url(http://backs.gavsistemas.com/Spider/img/banners/banner.jpg)", 
                            backgroundSize: '100% 100%', 
                            backgroundRepeat:'no-repeat',
                            height:'462px',
                            width: '100%',
                            paddingLeft:'160px',
                            display:'flex'
                        }}>
                            <div id="contenedorCarouselImg">
                                <div id="txtTituloCarousel">Bienvenidos a la Plataforma Spider Kimberly Clark</div>
                                {/* <div id="txtSubTitutloCarousel">lorem</div> */}
                                <div id="btnVerDetalle">
                                    <div id="txtVerDetalle">Ver detalles</div>
                                </div>
                            </div>
                            

                        </div>                        
                    </div>
                    <div>
                        <div style={{
                            backgroundImage: "url(http://backs.gavsistemas.com/Spider/img/banners/banner2.jpg)", 
                            backgroundSize: '100% 100%', 
                            backgroundRepeat:'no-repeat',
                            height:'462px',
                            width: '100%',
                            paddingLeft:'160px',
                            display:'flex'
                        }}>
                            <div id="contenedorCarouselImg">
                                <div id="txtTituloCarousel">Bienvenidos al Canal Moderno Grow</div>
                                {/* <div id="txtSubTitutloCarousel">Bienvenidos a la plataforma Spider Kimberly Klark</div> */}
                                <div id="btnVerDetalle">
                                    <div id="txtVerDetalle">Ver detalles</div>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                    <div>
                        <div style={{
                            backgroundImage: "url(http://backs.gavsistemas.com/Spider/img/banners/banner3.jpg)", 
                            backgroundSize: '100% 100%', 
                            backgroundRepeat:'no-repeat',
                            height:'462px',
                            width: '100%',
                            paddingLeft:'160px',
                            display:'flex'
                        }}>
                            <div id="contenedorCarouselImg">
                                <div id="txtTituloCarousel">Bienvenidos a Ecommerce Grow</div>
                                {/* <div id="txtSubTitutloCarousel">Lorem ipsum</div> */}
                                <div id="btnVerDetalle">
                                    <div id="txtVerDetalle">Ver detalles</div>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </Carousel>
            </div>
            <div style={{marginBottom: '100px'}}></div>
            <Carousels 
                heading                 = "Example Slider"
                slides                  = {categoriasPromociones} 
                seleccionarCategoria    = {seleccionarCategoria}
                seleccionoPromocion     = {seleccionoPromocion}
                deseleccionarCategoria  = {deseleccionarCategoria}
            />
            <div style={{marginBottom: '100px'}}></div>

        </div>
    )
}

export default AppCategorias

import React from 'react';
import '../Estilos/carousel.scss'
import ImagenHover from './ImagenHover'
import {Link} from "react-router-dom";

// =========================
// Slide
// =========================

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleSlideClick = this.handleSlideClick.bind(this)
    this.imageLoaded = this.imageLoaded.bind(this)
    this.slide = React.createRef()
  }
  
  handleMouseMove(event) {
    const el = this.slide.current
    const r = el.getBoundingClientRect()

    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)))
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)))
  }
  
  handleMouseLeave(event) {    
    this.slide.current.style.setProperty('--x', 0)
    this.slide.current.style.setProperty('--y', 0)
  }
  
  handleSlideClick(event) {
    this.props.handleSlideClick(this.props.slide.index)
  }
  
  imageLoaded(event) {
    event.target.style.opacity = 1
  }
  
  render() {
    const { 
        seleccionado,
        catnombre,
        catimagenfondo,
        caticono,
        catcolorhover, 
        caticonoseleccionado,
        catcolor,
        catimagenfondoseleccionado,
        index,
        caticonohover,
        cantidadPromociones
       } = this.props.slide
    const current = this.props.current
    const seleccionoPromocion  = this.props.seleccionoPromocion

    let classNames
    if(seleccionoPromocion == true){
      classNames = 'slidePequeno'
    }else{
      classNames = 'slide'
    }
    
    if (current === index) classNames += ' slide--current'
    else if (current - 1 === index) classNames += ' slide--previous'
    else if (current + 1 === index) classNames += ' slide--next'
        
    return (
      <li 
        ref={this.slide}
        className={classNames} 
        // onClick={this.handleSlideClick}
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
        style={
          this.props.posicion == 0 && seleccionoPromocion == true
          ?{marginLeft:'44px'}
          :null
        }
      >
        <div className="slide__image-wrapper">
            <ImagenHover 
                seleccionado  = {seleccionado}
                nombre        = {catnombre}
                fondo         = {catimagenfondo}
                icono         = {caticono}
                iconoSeleccionado = {caticonoseleccionado}
                color         = {catcolor}
                colorhover    = {catcolorhover}
                catimagenfondoseleccionado = {catimagenfondoseleccionado}
                caticonohover = {caticonohover}
                cantidadPromociones = {cantidadPromociones}
            />
        </div>
      </li>
    )
  }
}



// =========================
// Slider
// =========================

class Slider extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = { 
        current: 0,
        cambiando : false,

        activarCarouselAvanzar : false,
        activarCarouselRetroceder : false,
        actualizarPosicionCarouselPequeno : false
    }
    this.handlePreviousClick = this.handlePreviousClick.bind(this)
    this.handleNextClick = this.handleNextClick.bind(this)
    this.handleSlideClick = this.handleSlideClick.bind(this)
    this.seleccionarEspecifico = this.seleccionarEspecifico.bind(this)

    this.funActivarCarouselAvanzar = this.funActivarCarouselAvanzar.bind(this)
  }
  
  handlePreviousClick() {
    const previous = this.state.current - 1
        
    this.setState({ 
      current: (previous < 0) 
        ? this.props.slides.length - 1
        : previous
    })
  }

  seleccionarEspecifico(nuevo) {
    
    this.setState({ 
      current : nuevo
    })
  }
  
  handleNextClick() {
    const next = this.state.current + 1;
    
    this.setState({ 
      current: (next === this.props.slides.length) 
        ? 0
        : next
    })
  }
  
  handleSlideClick(index) {
    if (this.state.current !== index) {
      this.setState({
        current: index
      })
    }
  }

  funActivarCarouselAvanzar(){
    if(this.state.activarCarouselAvanzar == false){
      this.setState({
        activarCarouselAvanzar : true
      })
    }
  }

  funActicarCarouselRetroceder(){
    if(this.state.activarCarouselRetroceder == false){
      this.setState({
        activarCarouselRetroceder : true
      })
    }
  }

  funDesactivarCarousel(){
    if(this.state.activarCarouselAvanzar == true){
      this.setState({
        activarCarouselAvanzar : false
      })
    }

    if(this.state.activarCarouselRetroceder == true){
      this.setState({
        activarCarouselRetroceder : false
      })
    }
  }

  render() {
    const { current, direction, activarCarouselAvanzar} = this.state
    const { slides, heading, seleccionarCategoria, seleccionoPromocion, deseleccionarCategoria, nombreUrl } = this.props 
    const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`
    const wrapperTransform = {
      'transform': `translateX(-${current * (100 / slides.length)}%)`,
      // 'transitionDuration': '1s'
    }

    if(this.state.activarCarouselAvanzar == true){
      setTimeout(() => {
        if(this.state.activarCarouselAvanzar == true){
          if(seleccionoPromocion == true){
            if(this.state.current <= 1.5){
              this.setState({
                current: this.state.current+0.1
              })
            }
          }else{
            if(this.state.current <= 3.1){
              this.setState({
                current: this.state.current+0.1
              })
            }
          }
        }
        console.log(this.state.current)
      }, 105);
    }

    if(this.state.activarCarouselRetroceder == true){
      if(this.state.current < 0){
        this.setState({
          current: 0,
          activarCarouselRetroceder : false
        })
      }
      setTimeout(() => {
        if(this.state.activarCarouselRetroceder == true){
          if(this.state.current >= 0){
            this.setState({
              current: this.state.current-0.1
            })
          }else{
            this.setState({
              current: 0
            })
          }
        }
        console.log(this.state.current)
      }, 105);
    }

    
    if(seleccionoPromocion == true){
      if(this.state.actualizarPosicionCarouselPequeno == false){
        if(this.state.current >= 1.5 ){
          this.setState({
            current : 1.5
          })
        }
        this.setState({
          actualizarPosicionCarouselPequeno : true
        })
      }
    }

    return (
      <div 
        className={
          seleccionoPromocion == true
          ?'sliderPequeno'
          :'slider'
        } 
        aria-labelledby={headingId}
      >
        <ul className="slider__wrapper" style={wrapperTransform}>
          <h3 id={headingId} class="visuallyhidden">{heading}</h3>
          
          {slides.map((slide, posicion) => {
            return (
              // <div
              //   onClick={() => seleccionarCategoria(slide.scaid, posicion)}
              //   onDoubleClick = {() => deseleccionarCategoria()}
              // >
              <Link to={"/sistema/"+slide.nombreUrl}>
                <Carousel
                      key                        = {posicion}
                      posicion                   = {posicion}
                      slide                      = {slide}
                      current                    = {current}
                      handleSlideClick           = {this.handleSlideClick}
                      seleccionado               = {slide.seleccionado}
                      nombre                     = {slide.catnombre}
                      fondo                      = {slide.catimagenfondo}
                      icono                      = {slide.caticono}
                      caticonoseleccionado       = {slide.caticonoseleccionado}
                      catcolor                   = {slide.catcolor}
                      colorhover                 = {slide.catcolorhover}
                      seleccionoPromocion        = {seleccionoPromocion}
                      catimagenfondoseleccionado = {slide.catimagenfondoseleccionado}
                  />
              </Link>
              // {/* </div> */}
            )
          })}
        </ul>
        <div className='contenedorSliderCategoriasPromocion'>
          {
            this.state.current > 0
            ?<div 
              onMouseLeave={() =>{
                this.funDesactivarCarousel()
              }}
              onMouseEnter={() => {
                this.funActicarCarouselRetroceder()
              }} 
              id={
                seleccionoPromocion == true
                ?"primeraMitadSliderCategoriasPromocionPequeno"
                :"primeraMitadSliderCategoriasPromocion"
              } 
            ></div>
            :null
          }
          
          <div
            onMouseLeave={() =>{
              this.funDesactivarCarousel()
            }}
            onMouseEnter={() => {
              this.funActivarCarouselAvanzar()
            }} 
            id={
              seleccionoPromocion == true
              ?"segundaMitadSliderCategoriasPromocionPequeno"
              :"segundaMitadSliderCategoriasPromocion"
            }
           >

            </div>
        </div>
    
      </div>
    )
  }
}

export default Slider
// ReactDOM.render(<Slider heading="Example Slider" slides={slideData} />, document.getElementById('app'));
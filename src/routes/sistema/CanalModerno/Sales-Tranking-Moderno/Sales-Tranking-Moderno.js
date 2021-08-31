import React from 'react'
import CarouselCanalModerno from 'components/Sistema/CanalModerno/Infant-Child/Carousel/Carousel'
import 'styles/sistema/CanalModerno/Infant-Child/Infant-Child.css'
import {
    PERMISO_MODULO_CANAL_MODERNO_SUBMODULO_SALES_TRACKING_MODERNO
} from "constants/PermisosTypes"
import {funPermisosObtenidos, funPermisosObtenidosIf} from 'funciones/funPermiso.js'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const SalesTrankingModerno = () => {

    const {permisos} = useSelector(({auth}) => auth);

    return (
        <div>
            <CarouselCanalModerno/>

            {
                funPermisosObtenidosIf(
                    permisos,
                    PERMISO_MODULO_CANAL_MODERNO_SUBMODULO_SALES_TRACKING_MODERNO,
                    <div style={{marginLeft:'-30px', position: 'relative'}}>
                        <iframe
                            width="103%"
                            height="1200"
                            src="https://app.powerbi.com/view?r=eyJrIjoiYWJjZmZiZDMtMWRhYS00MGE0LWIwODQtMTc5MTYwZWY1Y2JhIiwidCI6IjFkZjQ2ODhjLWI5MTUtNDEwMy05OGMwLTNhMzY4ZmIyOTNlOCJ9&pageName=ReportSection0fc21e944fc17fe84ee8"
                            frameborder="0"
                        ></iframe>
                        <div id="taparIzqcdistribuidora">
                            
                        </div>
                        <div id="taparDerechaCdistribuidora">

                        </div>
                    </div>,
                    <div className="gx-page-error-container">
                        <div className="gx-page-error-content">
                        <div className="gx-error-code gx-mb-4">404</div>
                        <h2 className="gx-text-center">
                            Lo sentimos, usted no tiene permiso para ver esta pagina!
                        </h2>

                        <p className="gx-text-center">
                            <Link className="gx-btn gx-btn-primary" to="/sistema/categorias">Regresar</Link>
                        </p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default SalesTrankingModerno

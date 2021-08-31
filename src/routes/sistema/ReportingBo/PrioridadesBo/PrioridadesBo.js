import React from 'react'
import App from '../App/App'
import {
    PERMISO_SUBMODULO_REPORTING_BO_DASHBOARD_PRIORIDADES_BO
} from "constants/PermisosTypes"
import {funPermisosObtenidos, funPermisosObtenidosIf} from 'funciones/funPermiso.js'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const PrioridadesBo = () => {

    const {permisos} = useSelector(({auth}) => auth);

    return (
        <div>
            <App />

            {
                funPermisosObtenidosIf(
                    permisos,
                    PERMISO_SUBMODULO_REPORTING_BO_DASHBOARD_PRIORIDADES_BO,
                    <div style={{marginLeft:'-30px', position: 'relative'}}>
                        <iframe
                            width="102%"
                            height="1100"
                            src="https://app.powerbi.com/view?r=eyJrIjoiOWJlY2RjMzEtYmMyMC00OGU4LWExOTUtMTRiOGU3ODM4MDg1IiwidCI6IjFkZjQ2ODhjLWI5MTUtNDEwMy05OGMwLTNhMzY4ZmIyOTNlOCJ9"
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

export default PrioridadesBo
import React from 'react'
import {funPermisosObtenidos, funPermisosObtenidosIf} from 'funciones/funPermiso.js'
import {useSelector} from "react-redux";
import {
    
    PERMISO_SUBMODULO_DRIVER_PERU,
    PERMISO_DRIVER_PERU_GERENCIALES,
    PERMISO_DRIVER_PERU_EJECUTIVOS
    
} from "constants/PermisosTypes"
import {Link} from "react-router-dom";

const Peru = () => {

    const {permisos} = useSelector(({auth}) => auth);

    return (
        <div>
            {
                funPermisosObtenidosIf(
                    permisos,
                    PERMISO_SUBMODULO_DRIVER_PERU,
                    <div style={{marginLeft:'-30px', marginRight:'-30px', marginTop:'-30px', position: 'relative'}}>
                        {
                            funPermisosObtenidosIf(
                                permisos,
                                PERMISO_DRIVER_PERU_GERENCIALES,
                                <iframe
                                    width="100%"
                                    height="1150"
                                    src = "https://app.powerbi.com/view?r=eyJrIjoiN2VjNGNiYWItNTc2Mi00YTg4LThiODYtMzVkYzFjZDIzM2VmIiwidCI6IjFkZjQ2ODhjLWI5MTUtNDEwMy05OGMwLTNhMzY4ZmIyOTNlOCJ9"
                                    frameborder="0"
                                ></iframe>,
                                funPermisosObtenidosIf(
                                    permisos,
                                    PERMISO_DRIVER_PERU_EJECUTIVOS,
                                    <iframe
                                        width="100%"
                                        height="1150"
                                        src = "https://app.powerbi.com/view?r=eyJrIjoiNWZmYzg0ZjQtNWFkNC00YTZjLWEyYmQtMzJmYjJlZGQ3MzZiIiwidCI6IjFkZjQ2ODhjLWI5MTUtNDEwMy05OGMwLTNhMzY4ZmIyOTNlOCJ9&pageName=ReportSectionab29326800e37e100ea8"
                                        frameborder="0"
                                    ></iframe>,
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
                            )
                        }

                        
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

export default Peru

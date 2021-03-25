import React from 'react'
import {funPermisosObtenidos, funPermisosObtenidosIf} from 'funciones/funPermiso.js'
import {useSelector} from "react-redux";
import {
    
    PERMISO_SUBMODULO_BOLIVIA,
    PERMISO_BOLIVIA_GERENCIALES,
    PERMISO_BOLIVIA_EJECUTIVOS
    
} from "constants/PermisosTypes"
import {Link} from "react-router-dom";

const Bolivia = () => {

    const {permisos} = useSelector(({auth}) => auth);

    return (
        <div>
            {
                funPermisosObtenidosIf(
                    permisos,
                    PERMISO_SUBMODULO_BOLIVIA,
                    <div style={{marginLeft:'-30px', marginRight:'-30px', marginTop:'-30px', position: 'relative'}}>
                        {
                            funPermisosObtenidosIf(
                                permisos,
                                PERMISO_BOLIVIA_GERENCIALES,
                                <iframe
                                    width="100%"
                                    height="1150"
                                    src = "https://app.powerbi.com/view?r=eyJrIjoiYTE1NDE3MDAtNjRjNS00YjM4LTlmMzQtMjU3MDU2YWYxMmRjIiwidCI6IjFkZjQ2ODhjLWI5MTUtNDEwMy05OGMwLTNhMzY4ZmIyOTNlOCJ9&pageName=ReportSection"
                                    frameborder="0"
                                ></iframe>,
                                
                                funPermisosObtenidosIf(
                                    permisos,
                                    PERMISO_BOLIVIA_EJECUTIVOS,
                                    <iframe
                                        width="100%"
                                        height="1150"
                                        src = "https://app.powerbi.com/view?r=eyJrIjoiM2NiZTcxMzktODgzMC00NzQyLWJjY2YtZmE0NmI1OGU0NzRhIiwidCI6IjFkZjQ2ODhjLWI5MTUtNDEwMy05OGMwLTNhMzY4ZmIyOTNlOCJ9&pageName=ReportSection"
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

export default Bolivia

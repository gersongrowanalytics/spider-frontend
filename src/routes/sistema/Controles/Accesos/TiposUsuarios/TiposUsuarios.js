import React, {useEffect} from 'react'
import {Card, Table, Row, Col, Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {ObtenerListaTiposUsuariosReducer, VisibilidadModalNuevoTipoUsuarioReducer} from "appRedux/actions/Controles/Accesos/TiposUsuarios/TiposUsuarios";
import ModalNuevoTipoUsuario from "components/Sistema/Controles/Accesos/TiposUsuarios/ModalNuevoTipoUsuario"

const TiposUsuario = () => {

    const dispatch = useDispatch();
    
    const {
        cargandoTablaTiposUsuarios,
        columnasTablaTiposUsuarios,
        listaTiposUsuarios
    } = useSelector(({controlesAccesosTiposUsuarios}) => controlesAccesosTiposUsuarios);
    
    useEffect(() => {
        dispatch(ObtenerListaTiposUsuariosReducer())
    }, [])

    return (
        <div>
            <Button onClick={ () => dispatch(VisibilidadModalNuevoTipoUsuarioReducer(true))}>Nuevo</Button>
            <ModalNuevoTipoUsuario />
            <Card title="Lista de Tipos de Usuarios">
                <Row>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Table 
                            loading    = {cargandoTablaTiposUsuarios}
                            className  = "gx-table-responsive" 
                            columns    = {columnasTablaTiposUsuarios} 
                            dataSource = {listaTiposUsuarios} 
                        />
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default TiposUsuario

import React, {useEffect} from 'react'
import {Card, Table, Row, Col, Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {ObtenerListaPermisos, VisibilidadModalNuevoPermisoReducer} from "appRedux/actions/Controles/Accesos/Permisos/Permisos";
import ModalNuevoPermiso from "components/Sistema/Controles/Accesos/Permisos/ModalNuevoPermiso"

const Permisos = () => {

    const dispatch = useDispatch();
    
    const {
        cargandoTablaPermisos,
        columnasTablaPermisos,
        listaPermisos
    } = useSelector(({controlesAccesosPermisos}) => controlesAccesosPermisos);
    
    useEffect(() => {
        dispatch(ObtenerListaPermisos())
    }, [])

    return (
        <div>
            <Button onClick={ () => dispatch(VisibilidadModalNuevoPermisoReducer(true))}>Nuevo</Button>
            <ModalNuevoPermiso />
            <Card title="Lista de Permisos">
                <Row>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Table 
                            loading    = {cargandoTablaPermisos}
                            className  = "gx-table-responsive" 
                            columns    = {columnasTablaPermisos} 
                            dataSource = {listaPermisos} 
                        />
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Permisos
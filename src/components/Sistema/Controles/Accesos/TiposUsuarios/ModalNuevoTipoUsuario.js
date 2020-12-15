import React from 'react'
import {Form, Input, Button, Modal} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {VisibilidadModalNuevoTipoUsuarioReducer, CrearTipoUsuarioReducer} from "appRedux/actions/Controles/Accesos/TiposUsuarios/TiposUsuarios";
import 'styles/sistema/Controles/Accesos/Permisos/Permisos.css'

const ModalNuevoTipoUsuario = () => {
    
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const { 
        visibleModalNuevoTipoUsuario, 
        cargandoNuevoTipoUsuario 
    } = useSelector(({controlesAccesosTiposUsuarios}) => controlesAccesosTiposUsuarios);

    const enviarFormulario = async values => {
        console.log(values)
        await dispatch(CrearTipoUsuarioReducer(values))
        await form.resetFields();
    }

    return (
        <Modal
            title       = "Nuevo Permiso"
            visible     = {visibleModalNuevoTipoUsuario}
            onOk        = { () => dispatch(VisibilidadModalNuevoTipoUsuarioReducer(false))}
            onCancel    = { () => dispatch(VisibilidadModalNuevoTipoUsuarioReducer(false))}
            footer      = {null}
        >
            <div style={{paddingLeft:'20px', paddingRight:'20px'}}>
                <Form 
                    form    = {form}
                    onFinish= {enviarFormulario}
                    name    = "formNuevoRebate"   
                > 
                    <div id="tituloItemFormulario" >Permiso</div>
                    <Form.Item label="" name="pemnombre">  
                        <Input 
                            className="gx-mb-3 gx-w-100" 
                            rules={[{ required: true, message: 'Es necesario un Permiso' }]}
                            autoComplete={"off"}
                        />
                    </Form.Item>

                    <div id="tituloItemFormulario" >Slug</div>
                    <Form.Item label="" name="pemslug">  
                        <Input 
                            className="gx-mb-3 gx-w-100" 
                            rules={[{ required: true, message: 'Es necesario un Slug' }]}
                            autoComplete={"off"}
                        />
                    </Form.Item>

                    <div id="tituloItemFormulario" >Ruta</div>
                    <Form.Item label="" name="pemruta">  
                        <Input 
                            className="gx-mb-3 gx-w-100" 
                            rules={[{ required: true, message: 'Es necesario una ruta' }]}
                            autoComplete={"off"}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button className="gx-mb-0"
                            type="primary"
                            htmlType="submit"
                            loading={cargandoNuevoTipoUsuario}
                        >
                            {
                                cargandoNuevoTipoUsuario == true
                                ?"Enviando"
                                :"Enviar"
                            }
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    )
}

export default ModalNuevoTipoUsuario
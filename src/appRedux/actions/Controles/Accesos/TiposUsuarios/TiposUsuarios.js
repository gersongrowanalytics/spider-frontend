import {
    CONTROLES_ACCESOS_TIPOS_USUARIOS_CARGANDO_TABLA,
    CONTROLES_ACCESOS_TIPOS_USUARIOS_OBTENER_TIPOS_USUARIOS,
    CONTROLES_ACCESOS_TIPOS_USUARIOS_OBTENER_COLUMNAS_TABLA_TIPOS_USUARIOS,
    CONTROLES_ACCESOS_TIPOS_USUARIOS_VISIBILIDAD_MODAL_NUEVO_TIPO_USUARIO,
    CONTROLES_ACCESOS_TIPOS_USUARIOS_CARGANDO_NUEVO_TIPO_USUARIO
} from "constants/SistemaTypes";
import config from 'config'
import {message} from "antd"
import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"

export const ObtenerListaTiposUsuariosReducer = () => async (dispatch, getState) => {

    dispatch({
        type: CONTROLES_ACCESOS_TIPOS_USUARIOS_CARGANDO_TABLA,
        payload: true
    })

    const listaTiposUsuarios = getState().controlesAccesosTiposUsuarios.listaTiposUsuarios

	await fetch(config.api+'controles/accesos/tiposUsuarios/mostrarTiposUsuarios',
		{
			mode:'cors',
			method: 'POST',
			body: JSON.stringify({
                'api_token'	   : localStorage.getItem('usutoken')
            }),
			headers: {
				'Accept' 	   : 'application/json',
				'Content-type' : 'application/json',
				'api_token'	   : localStorage.getItem('usutoken')
			}
		}
	)
	.then( async res => {
        
        if(await dispatch(estadoRequestReducer(res.status))){
            return res.json()
        }
		
	})
	.then(data => {
		const estadoRequest = getState().estadoRequest.init_request
		if(estadoRequest == true){
            if(data.respuesta == true){
                dispatch(ArmarColumnasTablaTiposUsuariosReducer())
                dispatch({
                    type: CONTROLES_ACCESOS_TIPOS_USUARIOS_OBTENER_TIPOS_USUARIOS,
                    payload: data.datos
                })
            }else{
                message.error(data.mensaje)

                if(listaTiposUsuarios.length < 0){
                    dispatch({
                        type: CONTROLES_ACCESOS_TIPOS_USUARIOS_OBTENER_TIPOS_USUARIOS,
                        payload: data.datos
                    })
                }
                
            }
		}
	}).catch((error)=> {
        console.log(error)
        message.error(error)
        if(listaTiposUsuarios.length < 0){
            dispatch({
                type: CONTROLES_ACCESOS_TIPOS_USUARIOS_OBTENER_TIPOS_USUARIOS,
                payload: []
            })
        }
	});
}

export const ArmarColumnasTablaTiposUsuariosReducer = () => async (dispatch, getState) => {
    const columnas = [
        {
            title: 'ID',
            dataIndex: 'tpuid',
            key: 'tpuid',
            width: 50,
        },
        {
            title: 'Tipo de Usuario',
            dataIndex: 'tpunombre',
            key: 'tpunombre',
            width: 100,
        },
    ]

    dispatch({
        type: CONTROLES_ACCESOS_TIPOS_USUARIOS_OBTENER_COLUMNAS_TABLA_TIPOS_USUARIOS,
        payload : columnas
    })
}

export const VisibilidadModalNuevoTipoUsuarioReducer = (visibilidad)  => {
    
    return {
        type: CONTROLES_ACCESOS_TIPOS_USUARIOS_VISIBILIDAD_MODAL_NUEVO_TIPO_USUARIO,
        payload: visibilidad
    }
}

export const CrearTipoUsuarioReducer = (values) => async (dispatch, getState) => {

    dispatch({
        type: CONTROLES_ACCESOS_TIPOS_USUARIOS_CARGANDO_NUEVO_TIPO_USUARIO,
        payload: true
    })

	await fetch(config.api+'controles/accesos/tiposUsuarios/crearTipoUsuario',
		{
			mode:'cors',
			method: 'POST',
			body: JSON.stringify({
                'api_token'	    : localStorage.getItem('usutoken'),
                'tpunombre'     : values.tpunombre,
                'tpuprivilegio' : values.tpuprivilegio,
            }),
			headers: {
				'Accept' 	   : 'application/json',
				'Content-type' : 'application/json',
				'api_token'	   : localStorage.getItem('usutoken')
			}
		}
	)
	.then( async res => {
        
        if(await dispatch(estadoRequestReducer(res.status))){
            return res.json()
        }
		
	})
	.then(data => {
		const estadoRequest = getState().estadoRequest.init_request
		if(estadoRequest == true){
            if(data.respuesta == true){
                dispatch(ObtenerListaTiposUsuariosReducer())
                message.success(data.mensaje)
            }else{
                message.error(data.mensaje)
            }
        }
	}).catch((error)=> {
        console.log(error)
        message.error(error)
    });
    
    dispatch({
        type: CONTROLES_ACCESOS_TIPOS_USUARIOS_CARGANDO_NUEVO_TIPO_USUARIO,
        payload: false
    })
}
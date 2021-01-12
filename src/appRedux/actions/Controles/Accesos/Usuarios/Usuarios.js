import {
    CONTROLES_ACCESOS_USUARIOS_CARGANDO_TABLA,
    CONTROLES_ACCESOS_USUARIOS_OBTENER_USUARIOS,
    CONTROLES_ACCESOS_USUARIOS_OBTENER_COLUMNAS_TABLA_USUARIOS,
    CONTROLES_ACCESOS_USUARIOS_VISIBILIDAD_MODAL_NUEVO_USUARIO,
    CONTROLES_ACCESOS_USUARIOS_CARGANDO_NUEVO_USUARIO

} from "constants/SistemaTypes";
import config from 'config'
import {message} from "antd"
import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"


export const ObtenerListaUsuariosReducer = () => async (dispatch, getState) => {

    dispatch({
        type: CONTROLES_ACCESOS_USUARIOS_CARGANDO_TABLA,
        payload: true
    })

    const listaUsuarios = getState().controlesAccesosUsuarios.listaUsuarios

	await fetch(config.api+'controles/accesos/usuarios/mostrarUsuarios',
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
                dispatch(ArmarColumnasTablaUsuariosReducer())
                dispatch({
                    type: CONTROLES_ACCESOS_USUARIOS_OBTENER_USUARIOS,
                    payload: data.datos
                })
            }else{
                message.error(data.mensaje)

                if(listaUsuarios.length < 0){
                    dispatch({
                        type: CONTROLES_ACCESOS_USUARIOS_OBTENER_USUARIOS,
                        payload: data.datos
                    })
                }
                
            }
		}
	}).catch((error)=> {
        console.log(error)
        message.error(error)
        if(listaUsuarios.length < 0){
            dispatch({
                type: CONTROLES_ACCESOS_USUARIOS_OBTENER_USUARIOS,
                payload: []
            })
        }
	});
}

export const ArmarColumnasTablaUsuariosReducer = () => async (dispatch, getState) => {
    const columnas = [
        {
            title: 'ID',
            dataIndex: 'usuid',
            key: 'usuid',
            width: 50,
        },

        {
            title: 'Correo',
            dataIndex: 'usucorreo',
            key: 'usucorreo',
            width: 100,
        },

        {
            title: 'Tipo Usuario',
            dataIndex: 'tpunombre',
            key: 'tpunombre',
            width: 100,
        },

        {
            title: 'Usuario',
            dataIndex: 'usuusuario',
            key: 'usuusuario',
            width: 100,
        },

        {
            title: 'Contraseña',
            dataIndex: 'usucontrasena',
            key: 'usucontrasena',
            width: 100,
        },

        {
            title: 'Nombre',
            dataIndex: 'pernombre',
            key: 'pernombre',
            width: 100,
        },

        {
            title: 'Apell. Paterno',
            dataIndex: 'perapellidopaterno',
            key: 'perapellidopaterno',
            width: 100,
        },

        {
            title: 'Apell. Materno',
            dataIndex: 'perapellidomaterno',
            key: 'perapellidomaterno',
            width: 100,
        },
    ]

    dispatch({
        type: CONTROLES_ACCESOS_USUARIOS_OBTENER_COLUMNAS_TABLA_USUARIOS,
        payload : columnas
    })
}

export const VisibilidadModalNuevoUsuarioReducer = (visibilidad)  => {
    return {
        type: CONTROLES_ACCESOS_USUARIOS_VISIBILIDAD_MODAL_NUEVO_USUARIO,
        payload: visibilidad
    }
}

export const CrearUsuarioReducer = (values) => async (dispatch, getState) => {

    dispatch({
        type: CONTROLES_ACCESOS_USUARIOS_CARGANDO_NUEVO_USUARIO,
        payload: true
    })

	await fetch(config.api+'controles/accesos/usuarios/crearUsuario',
		{
			mode:'cors',
			method: 'POST',
			body: JSON.stringify({
                'api_token'	         : localStorage.getItem('usutoken'),
                'usucorreo'          : values.usucorreo,
                'usuusuario'         : values.usuusuario,
                'usucontrasena'      : values.usucontrasena,
                'pernombre'          : values.pernombre,
                'perapellidopaterno' : values.perapellidopaterno,
                'perapellidomaterno' : values.perapellidomaterno
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
                dispatch(ObtenerListaUsuariosReducer())
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
        type: CONTROLES_ACCESOS_USUARIOS_CARGANDO_NUEVO_USUARIO,
        payload: false
    })
}


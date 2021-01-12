import React from "react";
import {Route, Switch} from "react-router-dom";
import Permisos from './Permisos/Permisos'
import TiposUsuarios from './TiposUsuarios/TiposUsuarios'
import PermisosTiposUsuarios from './TiposUsuarios/Permisos'
import Usuarios from './Usuarios/Usuarios'

const Accesos = ({match}) => (
	<>
		<Switch>
			<Route path={`${match.url}/permisos`} component={Permisos}/>
			<Route path={`${match.url}/tiposUsuarios`} component={TiposUsuarios}/>
			<Route path={`${match.url}/tiposUsuariosPermisos`} component={PermisosTiposUsuarios}/>
			<Route path={`${match.url}/usuarios`} component={Usuarios}/>
			
		</Switch>
	</>
);

export default Accesos;

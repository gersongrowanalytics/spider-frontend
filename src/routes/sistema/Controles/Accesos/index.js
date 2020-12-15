import React from "react";
import {Route, Switch} from "react-router-dom";
import Permisos from './Permisos/Permisos'
import TiposUsuarios from './TiposUsuarios/TiposUsuarios'

const Accesos = ({match}) => (
	<>
		<Switch>
			<Route path={`${match.url}/permisos`} component={Permisos}/>
			<Route path={`${match.url}/tiposUsuarios`} component={TiposUsuarios}/>
			
		</Switch>
	</>
);

export default Accesos;

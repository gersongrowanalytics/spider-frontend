import React from "react";
import {Route, Switch} from "react-router-dom";
import CanalTradicional from "./CanalTradicional/index"
import AppCategorias from './App/index'

const Sistema = ({match}) => (
	<>
		<Switch>
			<Route path={`${match.url}/categorias`} component={AppCategorias}/>
			<Route path={`${match.url}/canalTradicional`} component={CanalTradicional}/>
		</Switch>
	</>
);

export default Sistema;

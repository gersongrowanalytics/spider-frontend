import React from "react";
import {Route, Switch} from "react-router-dom";
import CanalTradicional from "./CanalTradicional/index"
import CanalModerno from "./CanalModerno/index"
import SpiderData from "./SpiderData/index"
import AppCategorias from './App/index'
import Controles from "./Controles/index"
import ReportesGenerales from "./ReportesGenerales/ReportesGenerales"
import ReporteFinanciero from "./ReporteFinanciero/ReporteFinanciero"
import Prioridades from "./Prioridades/Prioridades"
import Innovaciones from "./Innovaciones/Innovaciones"

const Sistema = ({match}) => (
	<>
		<Switch>
			<Route path={`${match.url}/categorias`} component={AppCategorias}/>
			<Route path={`${match.url}/canalTradicional`} component={CanalTradicional}/>
			<Route path={`${match.url}/canalModerno`} component={CanalModerno}/>
			<Route path={`${match.url}/spiderData`} component={SpiderData}/>
			<Route path={`${match.url}/controles`} component={Controles}/>
			<Route path={`${match.url}/reportesGenerales`} component={ReportesGenerales}/>
			<Route path={`${match.url}/reporteFinanciero`} component={ReporteFinanciero}/>
			<Route path={`${match.url}/prioridades`} component={Prioridades}/>
			<Route path={`${match.url}/innovaciones`} component={Innovaciones}/>
		</Switch>
	</>
);

export default Sistema;

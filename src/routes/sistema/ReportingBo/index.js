import React from "react";
import {Route, Switch} from "react-router-dom";
import BigBetsBolivia from './BigBetsBolivia/BigBetsBolivia'
import PrioridadesBo from './PrioridadesBo/PrioridadesBo'
import ReporteFinancieroBO from './ReporteFinancieroBO/ReporteFinancieroBO'

const ReportingBo = ({match}) => (
	<>
		<Switch>
			<Route path={`${match.url}/big-bets-bolivia`} component={BigBetsBolivia}/>
			<Route path={`${match.url}/prioridades-bo`} component={PrioridadesBo}/>
			<Route path={`${match.url}/reporte-financiero-bo`} component={ReporteFinancieroBO}/>
		</Switch>
	</>
);

export default ReportingBo;

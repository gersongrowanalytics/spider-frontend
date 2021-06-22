import React from "react";
import {Route, Switch} from "react-router-dom";
import BigBetsBolivia from './BigBetsBolivia/BigBetsBolivia'
import PrioridadesBo from './PrioridadesBo/PrioridadesBo'

const ReportingBo = ({match}) => (
	<>
		<Switch>
			<Route path={`${match.url}/big-bets-bolivia`} component={BigBetsBolivia}/>
			<Route path={`${match.url}/prioridades-bo`} component={PrioridadesBo}/>
		</Switch>
	</>
);

export default ReportingBo;

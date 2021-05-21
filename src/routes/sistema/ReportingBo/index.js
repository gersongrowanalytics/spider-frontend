import React from "react";
import {Route, Switch} from "react-router-dom";
import BigBetsBolivia from './BigBetsBolivia/BigBetsBolivia'

const ReportingBo = ({match}) => (
	<>
		<Switch>
			<Route path={`${match.url}/big-bets-bolivia`} component={BigBetsBolivia}/>
		</Switch>
	</>
);

export default ReportingBo;

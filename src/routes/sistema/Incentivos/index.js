import React from "react";
import {Route, Switch} from "react-router-dom";
import Bolivia from './Bolivia/Bolivia'
import Peru from './Peru/Peru'

const Incentivos = ({match}) => (
	<>
		<Switch>
			<Route path={`${match.url}/driver-bolivia`} component={Bolivia}/>
			<Route path={`${match.url}/driver-peru`} component={Peru}/>
		</Switch>
	</>
);

export default Incentivos;

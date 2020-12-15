import React from "react";
import {Route, Switch} from "react-router-dom";
import Accesos from './Accesos/index'

const Controles = ({match}) => (
	<>
		<Switch>
			<Route path={`${match.url}/accesos`} component={Accesos}/>
			
		</Switch>
	</>
);

export default Controles;

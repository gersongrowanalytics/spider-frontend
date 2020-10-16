import React from "react";
import {Route, Switch} from "react-router-dom";
import Negocio from "./Negocio/index"
import Comercial from "./Comercial/index"
import Distribuidora from "./Distribuidora/index"
import Tendero from "./Tendero/index"
import Otros from "./Otros/index"



const CanalTradicional = ({match}) => (
    <>
        <Switch>
            <Route path={`${match.url}/negocio`} component={Negocio}/>
            <Route path={`${match.url}/comercial`} component={Comercial}/>
            <Route path={`${match.url}/distribuidora`} component={Distribuidora}/>
            <Route path={`${match.url}/tendero`} component={Tendero}/>
            <Route path={`${match.url}/otros`} component={Otros}/>
        </Switch>
    </>
);

export default CanalTradicional;

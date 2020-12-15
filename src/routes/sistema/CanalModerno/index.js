import React from "react";
import {Route, Switch} from "react-router-dom";
import InfantChild from "./Infant-Child/Infant-Child"
import BathTissue from "./Bath-Tissue/Bath-Tissue"
import SalesTrankingModerno from "./Sales-Tranking-Moderno/Sales-Tranking-Moderno"
import Otros from "./Otros/Otros"

const CanalModerno = ({match}) => (
    <>
        <Switch>
            <Route path={`${match.url}/infant-child`} component={InfantChild}/>
            <Route path={`${match.url}/bath-tissue`} component={BathTissue}/>
            <Route path={`${match.url}/sales-tranking-moderno`} component={SalesTrankingModerno}/>
            <Route path={`${match.url}/otros`} component={Otros}/>
        </Switch>
    </>
);

export default CanalModerno;

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import Settings from "./Settings";
import Auth from "./Auth";
import Notes from "./Notes";
import Contact from "./Contact";
import Common from "./Common";
import EstadoRequest from "./EstadoRequest";

const createRootReducer = (history) => combineReducers({
  router        : connectRouter(history),
  settings      : Settings,
  auth          : Auth,
  notes         : Notes,
  contact       : Contact,
  common        : Common,
  estadoRequest : EstadoRequest
});

export default createRootReducer

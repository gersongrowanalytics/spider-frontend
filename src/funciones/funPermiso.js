import {useSelector} from "react-redux";

export default function(permiso, componente)
{
    const {permisos} = useSelector(({auth}) => auth);

    if(localStorage.getItem('tpuprivilegio') == "todo"){
        return componente
    }

    let tienePermiso = false

    permisos.map((pem) => {
        if(permiso == pem.pemslug){
            tienePermiso = true
        }
    })

    if(tienePermiso){
        return componente
    }else{
        return null
    }
}


export function funPermisosObtenidos(permisos, permiso, componente)
{
    if(localStorage.getItem('tpuprivilegio') == "todo"){
        return componente
    }

    let tienePermiso = false

    permisos.map((pem) => {
        if(permiso == pem.pemslug){
            tienePermiso = true
        }
    })

    if(tienePermiso){
        return componente
    }else{
        return null
    }
}
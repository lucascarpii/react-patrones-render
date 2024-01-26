import React from "react";
import { useStorageListener } from "./useStorageListener";
import { Alert } from "../Alert";

const ChangeAlert = ({ sincronize }) => {
  const {show, toggleShow } = useStorageListener(sincronize)

  if(show){
    return <Alert 
            titulo="Vaya!" 
            texto="Parece que hubo cambios en los datos, recarga para actualizarlos." 
            onClickFn={toggleShow}/>
  } else {
    return null
  }
}

export { ChangeAlert }
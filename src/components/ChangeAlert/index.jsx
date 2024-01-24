import React from "react";
import { withStorageListener } from "./withStorageListener";
import { Alert } from "../Alert";

const ChangeAlert = ({show, toggleShow}) => {
  if(show){
    return <Alert 
            titulo="Vaya!" 
            texto="Parece que hubo cambios en los datos, recarga para actualizarlos." 
            onClickFn={toggleShow}/>
  } else {
    return null
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }
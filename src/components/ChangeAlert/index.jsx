import React from "react";
import { withStorageListener } from "./withStorageListener";
import { Alert } from "../Alert";

const ChangeAlert = ({show, toggleShow}) => {
  if(show){
    return <Alert 
            titulo="Ten cuidado!" 
            texto="Hubo cambios en los TODOs, recarga para actualizarlos." 
            onClickFn={toggleShow}/>
  } else {
    return null
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }
import React from "react";
import { withStorageListener } from "./withStorageListener";

const ChangeAlert = () => {
  return <p>¿Hubo cambios?</p>
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }
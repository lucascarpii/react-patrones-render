import React, { useState } from "react";

const useStorageListener = (sincronize) => {
  const [storageChange, setStorageChange] = useState(false)

  window.addEventListener('storage', (change) => {
    if (change.key === 'TODOS_V1') {
      setStorageChange(true)
    }
  })

  const toggleShow = () => {
    sincronize()
    setStorageChange(false)
  }

  return {
    show: storageChange,
    toggleShow: toggleShow
  }
}

export { useStorageListener }
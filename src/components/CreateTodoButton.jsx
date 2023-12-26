import React from "react"

function CreateTodoButton({setOpenModal, loading}){
  if(loading){
    return(
      <div className="animate-pulse bg-gray-300 p-2 w-full rounded h-10"></div>
    )
  }
  return(
  <button onClick={()=>setOpenModal(state => !state)} 
    className="flex items-center justify-center gap-2 bg-indigo-500 p-2 w-full rounded text-white font-medium">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>

    Agregar tarea
  </button>
  )
}

export { CreateTodoButton }
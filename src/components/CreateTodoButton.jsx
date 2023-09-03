import React from "react"
import { TodoContext } from "../TodoContext"

function CreateTodoButton({setOpenModal}){
  const {loading} = React.useContext(TodoContext)
  if(loading){
    return(
      <div className="animate-pulse bg-gray-300 p-2 w-full rounded h-10"></div>
    )
  }
  return(
  <button onClick={()=>setOpenModal(state => !state)} 
    className="bg-indigo-500 p-2 w-full rounded text-white font-medium">
    Agregar tarea
  </button>
  )
}

export { CreateTodoButton }
function CreateTodoButton(){
  return(
  <button onClick={(event)=> {
    console.log('le diste click')
    console.log(event)
  }} 
  className="bg-indigo-500 p-2 w-full rounded text-white font-medium">
    Agregar tarea
  </button>
  )
}

export { CreateTodoButton }
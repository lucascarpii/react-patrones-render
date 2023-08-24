function TodoCounter({total, completed}){
  return(
    <h1 className='text-xl font-medium text-center mb-6 text-indigo-500'>
      Has completado {completed} de {total} TODOS</h1>
  )
}

export { TodoCounter }
function TodoCounter({total, completed}){
  if(total === 0){
    return(
    <h1 className='text-xl font-medium text-center mb-6 text-indigo-500'>
      No hay TODOs creados</h1>
    )
  } else if(total > 0 && total === completed){
    return(
      <h1 className='text-xl font-medium text-center mb-6 text-indigo-500'>
        Has completado todos los TODOs</h1>
      )
  }
  else{
    return(
      <h1 className='text-xl font-medium text-center mb-6 text-indigo-500'>
        Has completado {completed} de {total} TODOs</h1>
    )
  }
}

export { TodoCounter }
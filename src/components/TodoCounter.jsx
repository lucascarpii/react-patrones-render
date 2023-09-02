function TodoCounter({total, completed, loading}){
  if (loading) {
    return(
      <div className='animate-pulse h-[28px] w-72 bg-gray-300 rounded mb-6 mx-auto'></div>
    );
  }
  let message = '';
  if(total === 0){
    message = 'No hay TODOs creados';
  } else if(total > 0 && total === completed){
    message = 'Has completado todos los TODOs';
  }
  else{
    message = `Has completado ${completed} de ${total} TODOs`;
  }
  return(
    <h1 className='text-xl font-medium text-center mb-6 text-indigo-500'>
      {message}
    </h1>
  )
}

export { TodoCounter }

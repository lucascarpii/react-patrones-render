import React from "react";

function TodoCounter({loading, completedTodos, totalTodos}){
  if (loading) {
    return(
      <div className='animate-pulse h-[32px] w-80 bg-gray-300 rounded mb-10 mx-auto'></div>
    );
  }
  let message = '';
  if(totalTodos === 0){
    message = 'No hay TODOs creados';
  } else if(totalTodos > 0 && totalTodos === completedTodos){
    message = 'Has completado todos los TODOs';
  }
  else{
    message = `Has completado ${completedTodos} de ${totalTodos} TODOs`;
  }
  return(
    <h1 className="text-center mb-10 text-2xl font-semibold tracking-tight text-gray-400">
     {message}
    </h1>
  )
}

export { TodoCounter }

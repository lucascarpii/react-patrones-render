import React from "react";
import {TodoContext} from '../TodoContext'

function TodoCounter(){
  const {loading, completedTodos, totalTodos} = React.useContext(TodoContext)

  if (loading) {
    return(
      <div className='animate-pulse h-[28px] w-72 bg-gray-300 rounded mb-6 mx-auto'></div>
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
    <h1 className='text-xl font-medium text-center mb-6 text-indigo-500'>
      {message}
    </h1>
  )
}

export { TodoCounter }

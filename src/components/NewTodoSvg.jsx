import React from 'react'
import { TodoContext } from '../TodoContext'
import NewTodoImage from '../img/AddTasks.svg'

function NewTodoSvg(){
  const {loading} = React.useContext(TodoContext)
  if(loading){
    return(
    <div className="animate-pulse hidden sm:flex items-center justify-center w-3/4 h-48 bg-gray-300 rounded">
      <svg className="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
      </svg>
    </div>
    )
  }
  return(
    <div className='hidden md:block w-3/4'>
      <img src={NewTodoImage} alt="New Todo Svg" className='h-48' />
    </div>
  )
}

export { NewTodoSvg }
import React from "react"

const NewTodoContainer = ({children, loading}) => {
  return(
    <div className='md:bg-white rounded-md shadow-lg flex flex-col items-center justify-center md:p-4 gap-6 h-fit'>
      {
        React.Children
          .toArray(children)
          .map(child => React.cloneElement( child , {loading} ))
      }
    </div>
  )
}

export { NewTodoContainer }
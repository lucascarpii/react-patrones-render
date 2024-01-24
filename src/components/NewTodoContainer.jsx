import React from "react"

const NewTodoContainer = ({children, loading}) => {
  return(
    <main className='max-w-lg mx-auto p-6 relative min-h-screen'>
      {
        React.Children
          .toArray(children)
          .map(child => React.cloneElement( child , {loading} ))
      }
    </main>
  )
}

export { NewTodoContainer }
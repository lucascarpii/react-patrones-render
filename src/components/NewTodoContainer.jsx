const NewTodoContainer = ({children}) => {
  return(
    <div className='md:bg-white rounded-md shadow-lg flex flex-col items-center justify-center md:p-4 gap-6 h-fit'>
      { children }
    </div>
  )
}

export { NewTodoContainer }
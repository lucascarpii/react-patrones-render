function TodoList({children}){
  return(
    <ul className="grid gap-2">
      {children}
    </ul>
  )
}

export { TodoList }
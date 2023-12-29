function TodoList(props) {
  return (
    <>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}

      <ul className="grid gap-2">
        {props.searchedTodos.map(props.render)}
      </ul>
    </>
  )
}

export { TodoList }
function TodoList(props) {
  const renderFunc = props.children || props.render;
  return (
    <>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
      
      <ul className="grid gap-2">
        {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}
      </ul>
    </>
  )
}

export { TodoList }
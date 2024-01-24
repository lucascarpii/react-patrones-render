import React from "react";

function TodoForm({ setOpenModal, addTodo }) {
  const [newTodoValue, setNewTodoValue] = React.useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTodo(newTodoValue);
      setOpenModal(false);
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit} >
      <textarea
        rows="4"
        placeholder="Terminar el curso de React..."
        value={newTodoValue}
        onChange={onChange}
        onKeyDown={handleEnter}
        autoFocus={true}
        className="block p-2.5 w-full text-sm text-gray-600 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 outline-indigo-200"
      />
      <div className="grid sm:grid-cols-2 gap-2 border-gray-200 ">
        <button onClick={() => setOpenModal(state => !state)} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">Cancelar</button>
        <button type="submit" className="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-2 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Agregar</button>
      </div>
    </form>
  )
}

export { TodoForm }
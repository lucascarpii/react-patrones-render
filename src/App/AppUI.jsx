import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodoContext } from '../TodoContext';
import React from 'react';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';
import { NewTodoSvg } from '../components/NewTodoSvg';

function AppUI (){
const {
  loading,
  error,
  searchedTodos,
  completeTodo,
  deleteTodo,
  openModal,
  setOpenModal
} = React.useContext(TodoContext)

  return(
  <main className='max-w-screen-lg mx-auto mt-4 p-6'>
    <TodoCounter />
    <section className="grid md:grid-cols-2 gap-8">
      <div className='md:bg-white rounded-md shadow-lg flex flex-col items-center justify-center md:p-4 gap-6 h-fit'>
        <NewTodoSvg />
        <CreateTodoButton setOpenModal={setOpenModal} />

        {openModal && ( 
          <Modal modalTitle={'Escribe un nuevo ToDo'}>
            <TodoForm />
          </Modal> )}
      </div>
      
      <div>
        <TodoSearch />
        <TodoList>
          {loading && (
            <>
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
            </>
          )}
          {error && <TodosError/>}
          {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      </div>
    </section>
  </main>
  )
}



export {AppUI}
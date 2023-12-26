import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';
import { NewTodoSvg } from '../components/NewTodoSvg';
import { NewTodoContainer } from '../components/NewTodoContainer';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext)

  return (
    <main className='max-w-screen-lg mx-auto mt-4 p-6'>
      <TodoCounter loading={loading} completedTodos={completedTodos} totalTodos={totalTodos} />

      <section className="grid md:grid-cols-2 gap-8">
        <NewTodoContainer>
          <NewTodoSvg />
          <CreateTodoButton setOpenModal={setOpenModal} />

          {openModal && (
            <Modal modalTitle={'Escribe un nuevo ToDo'}>
              <TodoForm />
            </Modal>)}
        </NewTodoContainer>

        <div>
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} loading={loading} />
          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError />}
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



export { AppUI }
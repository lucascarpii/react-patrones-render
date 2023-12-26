import React from 'react';
import { useTodos } from './useTodos';

// Header
import { TodoCounter } from '../components/TodoCounter';

// Create TODOs
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';
import { NewTodoSvg } from '../components/NewTodoSvg';
import { NewTodoContainer } from '../components/NewTodoContainer';
import { CreateTodoButton } from '../components/CreateTodoButton';

// Render TODOs
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { EmptyTodos } from '../components/EmptyTodos';

function App() {
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
    addTodo
  } = useTodos()

  return (
    <main className='max-w-screen-lg mx-auto mt-4 p-6'>
      <TodoCounter loading={loading} completedTodos={completedTodos} totalTodos={totalTodos} />

      <section className="grid md:grid-cols-2 gap-8">
        <NewTodoContainer>
          <NewTodoSvg loading={loading} />
          <CreateTodoButton setOpenModal={setOpenModal} loading={loading} />

          {openModal && (
            <Modal setOpenModal={setOpenModal} modalTitle={'Escribe un nuevo ToDo'}>
              <TodoForm
              setOpenModal={setOpenModal}
              addTodo={addTodo}
               />
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

export default App;
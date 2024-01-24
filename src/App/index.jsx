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
import { EmptySearchResults } from '../components/EmptySearchResults';

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
    <main className='max-w-lg mx-auto p-6 relative min-h-screen'>
      <TodoCounter loading={loading} completedTodos={completedTodos} totalTodos={totalTodos} />
      <CreateTodoButton loading={loading} setOpenModal={setOpenModal} />
      {openModal && (
        <Modal setOpenModal={setOpenModal} modalTitle={'Escribe un nuevo ToDo'}>
          <TodoForm
            setOpenModal={setOpenModal}
            addTodo={addTodo}
          />
        </Modal>)}
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} loading={loading} />
        <TodoList
          error={error}
          loading={loading}
          totalTodos={totalTodos}
          searchedTodos={searchedTodos}
          searchText={searchValue}
          onError={() => <TodosError />}
          onLoading={() => <TodosLoading />}
          onEmptyTodos={() => <EmptyTodos />}
          onEmptySearchResults={(searchText) => <EmptySearchResults searchText={searchText} />}
        >
          {todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}
        </TodoList>
    </main>
  )
}

export default App;
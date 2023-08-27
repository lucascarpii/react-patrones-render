import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoInput } from './TodoInput';
import React from 'react';

const defaultTodos = [
  {text: 'Primer tarea', completed: true},
  {text: 'Segunda tarea', completed: false},
  {text: 'Tercera tarea', completed: false},
  {text: 'Cuarta tarea', completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    }
  )

  const completeTodo =  (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
      )
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos)
  }

  const deleteTodo =  (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
      )
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  return (
    <main className='grid grid-cols-2 gap-8 max-w-screen-lg mx-auto mt-12'>
      <div  className='bg-white p-6 rounded-lg'>
      <h2 className='text-center text-lg mb-6 text-indigo-500 font-medium'>
        Crear una nueva tarea
      </h2>
      <TodoInput />
      <CreateTodoButton />
      </div>
    <div className='p-6'>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
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
      
    </main>
  );
}

export default App;

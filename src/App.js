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
  console.log('Los usuarios buscan todos de ' + searchValue);

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
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          />
        ))}
      </TodoList>
    </div>
      
    </main>
  );
}

export default App;

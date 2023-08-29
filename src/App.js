import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoInput } from './components/TodoInput';
import React from 'react';

// const defaultTodos = [
//   {text: 'Primer tarea', completed: true},
//   {text: 'Segunda tarea', completed: false},
//   {text: 'Tercera tarea', completed: false},
//   {text: 'Cuarta tarea', completed: false},
// ]
// let stringifiedTodos = JSON.stringify(defaultTodos)
// localStorage.setItem('TODOS_V1', stringifiedTodos);

// localStorage.removeItem('TODOS_V1');

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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
      (todo) => todo.text === text
      )
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos)
  }

  const deleteTodo =  (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      )
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <main className='grid grid-cols-2 gap-8 max-w-screen-lg mx-auto mt-12 '>
      <div  className='bg-white p-6 rounded-lg h-fit'>
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

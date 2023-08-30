import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoInput } from '../components/TodoInput';

function AppUI ({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}){
  return(
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
  )
}

export {AppUI}
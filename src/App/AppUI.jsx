import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoInput } from '../components/TodoInput';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodoContext } from '../TodoContext';

function AppUI (){
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
      <TodoCounter />
      <TodoSearch />
      
      <TodoContext.Consumer>
        {({
          loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }) => (
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
        )}
      </TodoContext.Consumer>

    </div>
  </main>
  )
}



export {AppUI}
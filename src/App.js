import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  {text: 'Primer tarea', completed: true},
  {text: 'Segunda tarea', completed: false},
  {text: 'Tercera tarea', completed: false},
  {text: 'Cuarta tarea', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={3} total={5} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          />
        ))}
      </TodoList>
      
    <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;

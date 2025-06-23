import React from 'react'
import { useTodo } from '../Context/TodoContext'
import TodoCard from './TodoCard';

export default function TodoList() {
  const {todos} = useTodo();

  return (
    <div className='bg-green-400 px-4'>
      {todos.map(todo => (
        <div key={todo.id} className=''>
          <TodoCard todo={todo}/>
        </div>
      ))}
    </div>
  )
}

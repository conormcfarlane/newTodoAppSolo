import React from 'react'
import { useTodo } from '../Context/TodoContext'

export default function TodoInput() {
  const {todos,setTodos,inputValue,setInputValue,handleAddTodo} = useTodo()
  return (
    <div>
      <input 
      type="text" 
      placeholder='Enter a new todo...'
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      />
      <button 
      className='cursor-pointer'
      onClick={() => handleAddTodo(inputValue)}
      >Submit Todo</button>
    </div>
  )
}

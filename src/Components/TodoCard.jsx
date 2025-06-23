import React from 'react'
import iconCheck from '../images/icon-check.svg'
import iconCross from '../images/icon-cross.svg'
import { useTodo } from '../Context/TodoContext'

export default function TodoCard({todo}) {
  const {todos,handleDeleteTodo} = useTodo()
  return (
    <div className='flex items-center gap-4 py-4 border-b'>
      <img src={iconCheck} className='w-5' alt="" />
      <p className='flex-1'>{todo.input}</p>
      <button 
       className='cursor-pointer'
       onClick={() => {handleDeleteTodo(todo.id)}}
       >
        <img src={iconCross}  
           className='w-5 ' 
           alt="" />
      </button>
      
    </div>
  )
}

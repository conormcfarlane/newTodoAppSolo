import React from 'react'
import { useState, createContext, useContext } from 'react'
import { compile } from 'tailwindcss';

// Create new context 
const TodoContext = createContext();

// Provider Component to wrap app in
export default function TodoProvider({children}) {
    // States go here
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [inputValue,setInputValue] = useState('')

    const [todos,setTodos] = useState([
      {id: crypto.randomUUID(), input:'clean the bins lad',complete: false},
      {id: crypto.randomUUID(), input:'clean the kitchen lad',complete: false}
    ])
    

    const handleAddTodo = (newTodo) => {
      if(newTodo === '') return;
      const newTodoList = [...todos,{id:crypto.randomUUID(),input:newTodo,complete:false}]
      setTodos(newTodoList)
      setInputValue('')
    }
    const handleDeleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id))
      console.log(todos)
    }
    const handleCompleteTodo = () =>{

    }
    const toggleDarkMode = () => {
        document.documentElement.classList.add('dark')
        setIsDarkMode(prevMode => !prevMode)
        console.log(todos);
        
    }
  return (
    <TodoContext.Provider value={{isDarkMode, toggleDarkMode,todos,setTodos,inputValue,setInputValue,handleAddTodo,handleDeleteTodo}}>
        {children}
    </TodoContext.Provider>
  )
}

// Helper hook to use context in components
export function useTodo(){
    return useContext(TodoContext)
}

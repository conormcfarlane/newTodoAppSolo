import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import TodoProvider from './Context/TodoContext'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import Tabs from './Components/Tabs'

function App() {
 
  return (
    <div className='px-6 py-10'>
      <TodoProvider>
        
        <Header/>
        <TodoInput/>
        <TodoList/>
        <Tabs/>
      </TodoProvider>
      
    </div>
  )
}

export default App

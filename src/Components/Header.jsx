import React from 'react'
import iconMoon from '../images/icon-moon.svg'
import iconSun from '../images/icon-sun.svg'
import { useTodo } from '../Context/TodoContext'

export default function Header() {
  const {isDarkMode, toggleDarkMode} = useTodo();
  return (
    <section className='bg-green-400 flex justify-between text-white font-semibold text-2xl'>
      <h1>T O D O </h1>
      <button onClick={toggleDarkMode}>
        <img src={isDarkMode ? iconSun : iconMoon} />
      </button>
      
    </section>
  )
}

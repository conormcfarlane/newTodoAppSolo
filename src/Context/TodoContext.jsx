import React from "react";
import { useState, createContext, useContext } from "react";
import { compile } from "tailwindcss";

// Create new context
const TodoContext = createContext();

// Provider Component to wrap app in
export default function TodoProvider({ children }) {
  // States go here
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedTab, setSelectedTab] = useState("All");

  const [todos, setTodos] = useState([
    { id: crypto.randomUUID(), input: "clean the bins lad", complete: false },
    {
      id: crypto.randomUUID(),
      input: "clean the kitchen lad",
      complete: false,
    },
  ]);

  const handleAddTodo = (newTodo) => {
    if (newTodo === "") return;
    const newTodoList = [
      ...todos,
      { id: crypto.randomUUID(), input: newTodo, complete: false },
    ];
    setTodos(newTodoList);
    setInputValue("");
  };
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log(todos);
  };
  const handleCompleteTodo = (id) => {
     setTodos(todos.map(todo => 
      todo.id === id ? {...todo, complete: !todo.complete} : todo
    ))
  };
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode((prevMode) => !prevMode);
    console.log(isDarkMode);
  };
  return (
    <TodoContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        todos,
        setTodos,
        inputValue,
        setInputValue,
        handleAddTodo,
        handleDeleteTodo,
        selectedTab,
        setSelectedTab,
        handleCompleteTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

// Helper hook to use context in components
export function useTodo() {
  return useContext(TodoContext);
}

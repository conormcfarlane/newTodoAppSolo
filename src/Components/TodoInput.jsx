import React from "react";
import { useTodo } from "../Context/TodoContext";

export default function TodoInput() {
  const {
    todos,
    setTodos,
    inputValue,
    setInputValue,
    handleAddTodo,
    handleEnterDown,
  } = useTodo();
  return (
    <div className="flex px-5 py-4 bg-white rounded-lg dark:bg-gray-800 gap-4 ">
      <div className="h-6 w-6 border rounded-full "></div>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="text-gray-700  dark:text-gray-400 outline-none"
        onKeyDown={handleEnterDown}
      />
    </div>
  );
}

import React from "react";
import { useTodo } from "../Context/TodoContext";

export default function TodoInput() {
  const { todos, setTodos, inputValue, setInputValue, handleAddTodo} =
    useTodo();
  return (
    <div className="px-5 py-2 bg-white rounded-lg">
      <input
        type="text"
        placeholder="Create a new todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="text-gray-700"
      />
      <button
        className="cursor-pointer"
        onClick={() => handleAddTodo(inputValue)}
      >
        Submit
      </button>
    </div>
  );
}

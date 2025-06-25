import React from "react";
import iconCheck from "../images/icon-check.svg";
import iconCross from "../images/icon-cross.svg";
import { useTodo } from "../Context/TodoContext";

export default function TodoCard({ todo }) {
  const { todos, handleDeleteTodo, handleCompleteTodo } = useTodo();
  return (
    <div className="flex items-center gap-4 py-4 px-5 border-b border-gray-300 dark:border-gray-700">
      <div
        className={`border rounded-full h-6 w-6 flex justify-center items-center cursor-pointer ${
          todo.complete ? "bg-blue-500" : null
        }`}
        onClick={() => {
          handleCompleteTodo(todo.id);
        }}
      >
        {todo.complete && <img src={iconCheck} />}
      </div>

      <p className="flex-1 dark:text-white">{todo.input}</p>
      <button
        className="cursor-pointer"
        onClick={() => {
          handleDeleteTodo(todo.id);
        }}
      >
        <img src={iconCross} className="w-5 " alt="" />
      </button>
    </div>
  );
}

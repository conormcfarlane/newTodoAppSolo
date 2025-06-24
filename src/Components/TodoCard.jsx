import React from "react";
import iconCheck from "../images/icon-check.svg";
import iconCross from "../images/icon-cross.svg";
import { useTodo } from "../Context/TodoContext";

export default function TodoCard({ todo }) {
  const { todos, handleDeleteTodo, handleCompleteTodo } = useTodo();
  return (
    <div className="flex items-center gap-4 py-3 px-5 border-b">
      <div
        className={`border rounded-full h-6 w-6 flex justify-center items-center cursor-pointer ${
          todo.complete ? "bg-blue-500" : ""
        }`}
        onClick={() => {
          handleCompleteTodo(todo.id);
        }}
      >
        <img src={iconCheck} alt="" />
      </div>

      <p className="flex-1">{todo.input}</p>
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

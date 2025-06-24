import React from "react";
import { useTodo } from "../Context/TodoContext";
import TodoCard from "./TodoCard";

export default function TodoList() {
  const { todos, selectedTab } = useTodo();
  const filteredTodoList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Active"
      ? todos.filter((val) => !val.complete)
      : todos.filter((val) => val.complete);
  return (
    <div className="bg-white rounded-lg">
      {filteredTodoList.map((todo) => (
        <div key={todo.id} className="">
          <TodoCard todo={todo} />
        </div>
      ))}
    </div>
  );
}

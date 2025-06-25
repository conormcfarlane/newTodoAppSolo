import React from "react";
import { useTodo } from "../Context/TodoContext";
import TodoCard from "./TodoCard";

export default function TodoList() {
  const { todos, selectedTab, handleClearCompleted } = useTodo();
  const filteredTodoList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Active"
      ? todos.filter((val) => !val.complete)
      : todos.filter((val) => val.complete);

  return (
    <section>
      <div className="bg-white rounded-t-lg dark:bg-gray-800">
        {filteredTodoList.map((todo) => (
          <div key={todo.id} className="">
            <TodoCard todo={todo} />
          </div>
        ))}
      </div>
      {todos.length > 0 ? (
         <div className="flex justify-between bg-white dark:bg-gray-800 px-5 py-4 text-sm rounded-b-lg">
        {selectedTab === "All" &&
        todos.filter((val) => !val.complete).length > 0 ? (
          <p>{todos.filter((val) => !val.complete).length} items left</p>
        ) : (
          <span></span>
        )}
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
      ) : null}
     
    </section>
  );
}

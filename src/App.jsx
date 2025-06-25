import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import TodoProvider from "./Context/TodoContext";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import Tabs from "./Components/Tabs";
import Background from "./Components/Background";

function App() {
  return (
    <div className="relative min-h-screen bg-gray-200 dark:bg-gray-900">
      <Background className="absolute z-0" />
      <div className="relative px-6 py-10 flex flex-col gap-10 z-10 max-w-[600px] mx-auto">
        <TodoProvider>
          <Header />
          <div className="flex flex-col gap-4 text-gray-500">
            <TodoInput />
            <TodoList />
            <Tabs />
          </div>
        </TodoProvider>
      </div>
    </div>
  );
}

export default App;

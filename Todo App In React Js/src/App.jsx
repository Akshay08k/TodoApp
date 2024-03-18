import React, { useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/Todolist";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
    console.log(todos);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="appStyle">
      <h1>Todo App</h1>
      <TodoForm onAdd={handleAdd} />

      <TodoList todos={todos} onDelete={handleDelete} />
    </div>
  );
}

export default App;

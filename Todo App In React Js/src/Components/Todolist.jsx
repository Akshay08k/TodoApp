import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onDelete }) => {
  const todoListStyle = {
    marginTop: "20px",
  };

  return (
    <div style={todoListStyle}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;

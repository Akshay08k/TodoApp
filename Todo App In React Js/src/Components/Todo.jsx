import React from "react";

const Todo = ({ todo, onDelete }) => {
  const todoStyle = {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    margin: "5px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div style={todoStyle}>
      <span>{todo.text}</span>
      <button style={{ marginLeft: "10px" }} onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
};

export default Todo;

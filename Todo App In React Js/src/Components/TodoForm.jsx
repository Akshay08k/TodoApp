import React, { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const formStyle = {
    display: "flex",
    marginBottom: "20px",
  };

  const inputStyle = {
    flex: "1",
    marginRight: "10px",
    padding: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "7px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const handleAdd = () => {
    if (text.trim() !== "") {
      onAdd(text);
      setText("");
    }
  };

  return (
    <div style={formStyle}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleAdd} style={buttonStyle}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;

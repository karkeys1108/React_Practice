import React from "react";
import "../styles/TodoItem.css";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-content">
        <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
        <small className="timestamp">{todo.timestamp}</small>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;

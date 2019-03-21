import React from "react";

const Todo = props => {
  return (
    <label
      className={`todo-label${props.todo.completed ? " complete" : ""}`}
      onChange={() => props.completeTask(props.todo.id)}
    >
      <input type="checkbox" className="todo-label-text" />
      {props.todo.task}
    </label>
  );
};

export default Todo;

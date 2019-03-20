import React from "react";

const TodoList = props => {
  return (
    <div className="todoitem-container">
      <p onClick={props.completeTask}>{props.todoDisplay.task}</p>
    </div>
  );
};

export default TodoList;

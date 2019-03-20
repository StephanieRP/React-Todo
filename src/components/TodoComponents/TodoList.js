import React from "react";
// import Todo from "../TodoComponents/Todo";

const TodoList = props => {
  console.log(props);
  return (
    <div className="todolist-container">
      <p>{props.todoDisplay.task}</p>
    </div>
  );
};

export default TodoList;

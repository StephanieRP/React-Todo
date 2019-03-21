import React from "react";
import Todo from "../TodoComponents/Todo";

const TodoList = props => {
  return props.taskList.todoList.map((todo, index) => (
    <Todo key={todo.id} todoDisplay={todo} completed={todo.completed} />
  ));
};

export default TodoList;

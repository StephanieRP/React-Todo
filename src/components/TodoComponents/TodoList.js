import React from "react";
import Todo from "../TodoComponents/Todo";

const TodoList = props => {
  return props.taskList.todoList.map(todo => (
    <Todo key={todo.id} todo={todo} completeTask={props.completeTask} />
  ));
};

export default TodoList;

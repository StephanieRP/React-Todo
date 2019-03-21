import React from "react";
import Todo from "../TodoComponents/Todo";

const TodoList = props => {
  return props.taskList.todoList.map(todo => (
    <Todo
      key={todo.id}
      todo={todo}
      complete={todo.completed}
      completeTask={props.completeTask}
      removeTask={props.removeTask}
    />
  ));
};

export default TodoList;

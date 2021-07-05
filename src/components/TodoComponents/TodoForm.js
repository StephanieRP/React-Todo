import React from "react";

const TodoForm = props => {
  return (
    <form className="todo-form">
      <input
        value={props.task}
        name="task"
        placeholder="Type your new task"
        onChange={props.inputTask}
      />
      <button onClick={props.addTask}>New Task</button>
      <button>Remove Task</button>
    </form>
  );
};

export default TodoForm;

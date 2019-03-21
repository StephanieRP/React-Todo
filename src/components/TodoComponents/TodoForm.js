import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  inputTask = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTask = event => {
    event.preventDefault();
    this.props.addNewTask(this.state.task);

    this.setState({
      task: ""
    });
  };

  render() {
    return (
      <form className="todo-form">
        <input
          value={this.state.task}
          name="task"
          placeholder="Type your new task"
          onChange={this.inputTask}
        />
        <button onClick={this.addTask}>New Task</button>
        <button>Remove Task</button>
      </form>
    );
  }
}

export default TodoForm;

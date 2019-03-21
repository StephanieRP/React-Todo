import React from "react";
import TodoList from "../src/components/TodoComponents/TodoList";
import TodoForm from "../src/components/TodoComponents/TodoForm";

// To do List
const todos = [];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todoList: todos,
      task: "",
      id: Date.now(),
      completed: false
    };
  }
  addNewTask = task => {
    const copyTask = this.state.todoList.slice();
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    copyTask.push(newTask);
    this.setState({ todoList: copyTask });
  };

  completeTask = id => {
    this.setState({
      todoList: this.state.todoList.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  removeTask = event => {
    event.preventDefault();
    let notComplete = [];
    let trueTask = this.state.todoList.filter(task => {
      if (task.completed === false) {
        notComplete.push(task);
      }
      return notComplete;
    });
    trueTask = notComplete;

    this.setState({ todoList: trueTask });
  };

  render() {
    return (
      <div className="app">
        <h1 className="todo-title">My Todo App</h1>
        <div className="todo-form-container">
          <TodoForm addNewTask={this.addNewTask} removeTask={this.removeTask} />
        </div>
        <TodoList
          taskList={this.state}
          completeTask={this.completeTask}
          removeTask={this.removeTask}
        />
      </div>
    );
  }
}

export default App;

import React from "react";
import TodoList from "../src/components/TodoComponents/TodoList";
import TodoForm from "../src/components/TodoComponents/TodoForm";

// To do List
const todos = [
  {
    task: "Take Out the Trash",
    id: 1,
    completed: false
  },
  {
    task: "Wash the dishes ",
    id: 2,
    completed: false
  },
  {
    task: "Walk the dog ",
    id: 3,
    completed: false
  },
  {
    task: "Study Programming",
    id: 4,
    completed: false
  }
];

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

  render() {
    return (
      <div className="app">
        <h1 className="todo-title">My Todo App</h1>
        <div className="todo-form-container">
          <TodoForm addNewTask={this.addNewTask} />
        </div>
        <TodoList taskList={this.state} completeTask={this.completeTask} />
      </div>
    );
  }
}

export default App;

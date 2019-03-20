import React from "react";
import Todo from "../src/components/TodoComponents/Todo";
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
      id: "",
      completed: ""
    };
  }

  inputTask = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTask = event => {
    event.preventDefault();
    const newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: this.state.completed
    };
    this.setState({
      todoList: [...this.state.todoList, newTask]
    });
  };

  render() {
    return (
      <div className="app">
        <h1>My Todo App</h1>
        <TodoForm
          task={this.state.task}
          inputTask={this.inputTask}
          addTask={this.addTask}
        />
        <div className="todolist">
          {this.state.todoList.map((todo, index) => (
            <TodoList key={index} todoDisplay={todo} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

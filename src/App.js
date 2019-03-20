import React from "react";
// import Todo from "../src/components/TodoComponents/Todo";
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
    let idName = Date.now();

    this.state = {
      todoList: todos,
      task: "",
      id: idName,
      completed: ""
    };
  }

  inputTask = event => {
    this.setState({
      task: event.target.value
    });
  };

  addTask = event => {
    event.preventDefault();
    const newTask = {
      task: this.state.task,
      id: this.state.id,
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTask],
      task: ""
    });
  };

  // completeTask = id => {
  //   this.setState(prevState => {
  //     const complete = prevState.todoList.map(task => {
  //       if (task.id === id) {
  //         task.completed = !task.completed;
  //         task.style.textDecoration = "line-through";
  //       }
  //       return task;
  //     });
  //     return {
  //       task: complete
  //     };
  //   });
  // };

  render() {
    return (
      <div className="app">
        <h1>My Todo App</h1>
        <TodoForm
          task={this.state.task}
          inputTask={this.inputTask}
          addTask={this.addTask}
          clearInput={this.clearInput}
        />
        <div className="todolist">
          {this.state.todoList.map((todo, index) => (
            <TodoList
              key={todo.id}
              todoDisplay={todo}
              completed={todo.completed}
              completeTask={this.completeTask}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

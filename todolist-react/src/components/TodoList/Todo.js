import { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import style from "./Todo.module.css";
//css module
let initId = 0;

class Todo extends Component {
  state = {
    todos: [],
  };

  handleAddTodoItem = (content) => {
    this.setState({ todos: [{ content, id: initId++ }, ...this.state.todos] });
  };

  componentDidUpdate() {
    console.log("didUpdate", this.state.todos);
  }

  handleDeleteTodo = (targetIndex) => {
    this.setState({
      todos: this.state.todos.filter((todo, index) => index !== targetIndex),
    });
  };

  render() {
    return (
      <div className={style['todo__container']}>
        <TodoForm onSubmit={this.handleAddTodoItem} />
        <TodoList todos={this.state.todos} onDelete={this.handleDeleteTodo} />
      </div>
    );
  }
}

export default Todo;

import { Component, useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import style from "./Todo.module.css";
//css module
let initId = 0;

const Todo = () => {
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    console.log("didUpdate", todos);
  }, [])

  const handleAddTodoItem = (content) => {
    setTodos([{ content, id: initId++ }, ...todos]);
  };


  const handleDeleteTodo = (targetIndex) => {
    setTodos(todos.filter((todo, index) => index !== targetIndex),
    );
  };


  return (
    <div className={style['todo__container']}>
      <TodoForm onSubmit={handleAddTodoItem} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  )
}

export default Todo;

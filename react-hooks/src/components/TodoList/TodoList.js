import { Component } from "react";
import TodoItem from "./TodoItem";
import style from "./Todo.module.css";


const TodoList = ({todos, onDelete}) =>{
    return (
        <ul className={style['todo-list']}>
                {todos.map((todo,index)=>{
                    return (
                        <TodoItem key={todo.id} todo={todo} onDelete={()=>onDelete(index)}/>
                    )
                })}
            </ul>
    )
}

export default TodoList;
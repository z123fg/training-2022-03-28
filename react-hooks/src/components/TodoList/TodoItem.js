import { Component } from "react";
import style from "./Todo.module.css";


const TodoItem = ({ todo, onDelete }) => {
    return (
        <li className={style['todo-item']}>
            <span className={style['todo-item__content']}>{todo.content}</span>
            <button className={style['btn--alert']} onClick={onDelete}>delete</button>
        </li>
    )
}


export default TodoItem;
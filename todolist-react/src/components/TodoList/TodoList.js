import { Component } from "react";
import TodoItem from "./TodoItem";
import style from "./Todo.module.css";


class TodoList extends Component {
    

    render(){
        const {todos, onDelete} = this.props
        return (
            <ul class={style['todo-list']}>
                {todos.map((todo,index)=>{
                    return (
                        <TodoItem key={todo.id} todo={todo} onDelete={()=>onDelete(index)}/>
                    )
                })}
            </ul>
        )
    }

}

export default TodoList;

//mvc: model view controller
//mvvm: model view view-model

import {APIs} from "./APIs";

const Model = (()=>{
    class State {
        #pendingTodos;//for pendinglist view
        #completedTodos;//for completedlist view
        #todos;//from server
        #onChange;//function that get invoked when the state change
        constructor(){
            this.#todos = [];
            this.#pendingTodos = [];
            this.#completedTodos = [];
        }

        set todos(newTodos){
            newTodos = newTodos.map((todo,index)=>({...todo, isEdit: false,index}));
            this.#todos = newTodos;
            this.#pendingTodos = newTodos.filter(todo=>!todo.isCompleted);
            this.#completedTodos = newTodos.filter(todo=>todo.isCompleted);
            this.#onChange();

        }
        get todos(){
            return this.#todos;
        }
        get pendingTodos(){
            return this.#pendingTodos
        }
        get completedTodos(){
            return this.#completedTodos
        }

        set onChange(newOnChange){
            this.#onChange = newOnChange;
        }

    }

    const getTodos = APIs.getTodos;
    const createTodo = APIs.createTodo;
    const toggleTodo = APIs.toggleTodo;
    const editTodo = APIs.editTodo;
    const deleteTodo = APIs.deleteTodo;

    return {
        State,
        getTodos,
        createTodo,
        editTodo,
        toggleTodo,
        deleteTodo
    }

})();

const View = (() => {

    const getPendingListEl = ()=>document.querySelector(".list--pending");
    const getCompletedListEl = ()=>document.querySelector(".list--completed");
    const getFormEl = ()=>document.querySelector("todo__form");
    const getListContainerEl = ()=>document.querySelector(".todo__list");
    const getTodoInputEl = (index)=>document.querySelector(`#${index}-todo-input`);
    const getFormInputEl = () => document.querySelector(".todo__form input")
    const createTodosTemp = (todos,index) => {
        return todos.map(todo=>{

            const namePrefix = `${todo.index}`
            return `
                <li>
                    ${todo.isCompleted?`<button name="${namePrefix}-move"> <= </button>`:""}
                    ${todo.isEdit?`<input id="${index}-todo-input" value="${todo.content}">`:`<span>${todo.content}</span>`}
                    <button name="${namePrefix}-edit">
                        edit
                    </button>
                    <button name="${namePrefix}-delete">
                        delete
                    </button>
                    ${!todo.isCompleted? //conditional rendering
                    `<button name="${namePrefix}-move">
                        =>
                    </button>`:
                    ""}
                </li>
            `
        }).join("");
    }

    const render = (target,template) => {
        target.innerHTML = template;
    }

    return {
        getFormInputEl,
        getTodoInputEl,
        getListContainerEl,
        getFormEl,
        getPendingListEl,
        getCompletedListEl,
        render,
        createTodosTemp
    }
})();

const Controller = ((model,view) => {
    const state = new model.State();
    const bindEvent = () =>{
        //submit, edit, delete, toggle
        view.getFormEl.addEventListener("submit",function(e){
            const newTodo = {content:getFormInputEl().value, isCompleted:false}
            model.createTodo(newTodo).then(res=>{
                state.todos.unshift(res);
                state.todos = [...state.todos]
            })
        });

        view.getListContainerEl().addEventListener("click",function(e){
            const [index,role] = e.target.name.split("-");
            const {isCompleted,id, isEdit} = state.todos[index]
            if(index === undefined || role === undefined) return;
            if(role === "move"){
                model.toggleTodo(id,{isCompleted:!isCompleted}).then((res)=>{
                    state.todos[index] = res;
                    state.todos = [...state.todos];
                })
            }else if(role === "edit"){
                if(isEdit){
                    const newContent = view.getTodoInputEl(index).value;
                    model.editTodo(id,{content:newContent}).then((res)=>{
                        state.todos[index] = res;
                        state.todos = [...state.todos]
                    })
                }else{
                    state.todos[index].isEdit = !isEdit;
                    state.todos = [...state.todos]
                }
                

            }else if(role === "delete"){
                model.deleteTodo(id).then(res=>{
                    state.todos.splice(index,1);
                    state.todos = [...state.todos]
                })

            }
            /* const name = e.target.name;
            const arr = name.split("-");
            const index = arr[0];
            const role = arr[1]; */
        })
    }

    const bindOnChange = () => {
        state.onChange = () => {
            view.render(view.getPendingListEl(),view.createTodosTemp(state.pendingTodos))
            view.render(view.getCompletedListEl(),view.createTodosTemp(state.completedTodos));
        }
    }

    const init = () => {
        model.getTodos().then(todos=>state.todos = todos);
    }

    const bootstrap = () => {
        bindOnChange();
        init()
        bindEvent();
    }

    return {bootstrap}
})(Model,View);


Controller.bootstrap();
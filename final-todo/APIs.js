const APIs = (() => {
    const url = "http://localhost:3000";
    const path = "todos";

    const getTodos = () => {
        return fetch(`${url}/${path}`).then(res => res.json());
    }

    const createTodo = (newTodo) => {
        return fetch(`${url}/${path}`, {
            method: "POST",
            header: {
                Accept: "aplication/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo)
        }).then(res => res.json());
    }

    const toggleTodo = (id, newTodo) => {
        return fetch(`${url}/${path}/${id}`, {
            method: "PATCH",
            header: {
                Accept: "aplication/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo) //{isCompleted:"breakfast"}
        }).then(res => res.json());
    }

    const editTodo = (id, newTodo) => {
        return fetch(`${url}/${path}/${id}`, {
            method: "PATCH",
            header: {
                Accept: "aplication/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo) //{content:"breakfast"}
        }).then(res => res.json());

    }

    const deleteTodo = (id) => {
        return fetch(`${url}/${path}/${id}`,{
            method:"DELETE"
        }).then(res=>res.json());
    }
    return {
        getTodos,
        createTodo,
        toggleTodo,
        editTodo,
        deleteTodo
    }
})();

export default APIs
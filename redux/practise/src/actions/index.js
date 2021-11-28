export const addTodo = (data) => {
    return ({
        type : "ADD_TODO",
        payload : {
            data :data,
            id : new Date().getTime().toString()
        }
       
    })
}


export const deleteTodo = (id) => {
    return {
        type : "DELETE_TODO",
        id
    }
}
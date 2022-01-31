import { ADD_TODO,
        TOGGLE_TODO,
        FILTER_TODO } from "./todotype";

let nextTodoId = 0
export const addTodo =(content) => {
    return {
    type:ADD_TODO,
    payload:{
        id: ++nextTodoId,
        content
    },
    }
}
export const toggleTodo = (id) => {
    return {
        type:TOGGLE_TODO,
        payload:{
            id,
        }
    }
}
export const filterTodo = (filter)=>{
    return {
        type:FILTER_TODO,
        payload: {
            filter,
        }
    }
}
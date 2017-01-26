import { v4 } from 'node-uuid';
import * as api from '../api'

/**
 * Using node.uuid v4 method to generate unique id
 */
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: v4(),
        text
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

const receiveTodos = (filter, response) => {
    return {
        type: 'RECEIVE_TODOS',
        filter,
        response
    }
}

export const requestTodos = (filter) => ({
    type: 'REQUEST_TODOS',
    filter,
})

/**
 * Wrapped api REST fetchTodos for better encapsulation
 */
export const fetchTodos = (filter) => (
    api.fetchTodos(filter).then( response =>
        receiveTodos(filter, response)
    )
)

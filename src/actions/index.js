// import { v4 } from 'node-uuid';
import * as api from '../api';
import { getIsFetching } from '../reducers';
import { normalize } from 'normalizr';
import * as schema from './schema'

/**
 * Deprecated, back-end actions
 */
/**
 * Using node.uuid v4 method to generate unique id
 */
// export const addTodo = (text) => {
//     return {
//         type: 'ADD_TODO',
//         id: v4(),
//         text
//     }
// }
//
// export const toggleTodo = (id) => {
//     return {
//         type: 'TOGGLE_TODO',
//         id
//     }
// }

/**
 * Deprecated, inline in fetchTodos
 */
// const receiveTodos = (filter, response) => {
//     return {
//         type: 'RECEIVE_TODOS',
//         filter,
//         response
//     }
// }
//
// const requestTodos = (filter) => ({
//     type: 'REQUEST_TODOS',
//     filter,
// })

/**
 * Wrapped api REST fetchTodos for better encapsulation
 */
export const fetchTodos = (filter) => (dispatch, getState) => {
    /* exit early if is fetching todos */
    if (getIsFetching(getState(), filter)) return Promise.resolve()

    dispatch({
        type: 'FETCH_TODOS_REQUEST',
        filter,
    })

    return api.fetchTodos(filter).then(
        response => {
            dispatch({
                type: 'FETCH_TODOS_SUCCESS',
                filter,
                response: normalize(response, schema.todos)
            })
        },
        error => {
            dispatch({
                type: 'FETCH_TODOS_FAIL',
                filter,
                error: error.message || 'something wrong.'
            })
        }
    )
}

/**
 * Thunk function to call addTodo from api
 */
export const addTodo = (text) => (dispatch) => {
    api.addTodo(text).then(
       response => {
           dispatch({
               type: 'ADD_TODO_SUCCESS',
               response: normalize(response, schema.todo)
           })
       }
    )
}

/**
 * Thunk funtion to toggle todo
 */
export const toggleTodo = (id) => (dispatch) => {
    api.toggleTodo(id).then(
        response => {
            dispatch({
                type: 'TOGGLE_TODO_SUCCESS',
                response: normalize(response, schema.todo)
            })
        }
    )
}
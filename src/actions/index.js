// import { v4 } from 'node-uuid';
import * as api from '../api';
import { getIsFetching } from '../reducers';
import { normalize } from 'normalizr';
import * as schema from './schema';
import {takeEvery, call, put, select, cancel} from 'redux-saga/effects';

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
 * Deprecated thunk functions
 */
/**
 * Wrapped api REST fetchTodos for better encapsulation
 */
// export const fetchTodos = (filter) => (dispatch, getState) => {
//     /* exit early if is fetching todos */
//     if (getIsFetching(getState(), filter)) return Promise.resolve()

//     dispatch({
//         type: 'FETCH_TODOS_REQUEST',
//         filter,
//     })

//     return api.fetchTodos(filter).then(
//         response => {
//             dispatch({
//                 type: 'FETCH_TODOS_SUCCESS',
//                 filter,
//                 response: normalize(response, schema.todos)
//             })
//         },
//         error => {
//             dispatch({
//                 type: 'FETCH_TODOS_FAIL',
//                 filter,
//                 error: error.message || 'something wrong.'
//             })
//         }
//     )
// }

/**
 * Thunk function to call addTodo from api
 */
// export const addTodo = (text) => (dispatch) => {
//     api.addTodo(text).then(
//        response => {
//            dispatch({
//                type: 'ADD_TODO_SUCCESS',
//                response: normalize(response, schema.todo)
//            })
//        }
//     )
// }

/**
 * Thunk funtion to toggle todo
 */
// export const toggleTodo = (id) => (dispatch) => {
//     api.toggleTodo(id).then(
//         response => {
//             dispatch({
//                 type: 'TOGGLE_TODO_SUCCESS',
//                 response: normalize(response, schema.todo)
//             })
//         }
//     )
// }

/**
 * Saga functions
 */
export const fetchTodos = (filter) => {
    return {
        type: 'FETCH_TODOS_REQUEST',
        filter
    };
}

export const addTodo = (text) => ({
    type: 'ADD_TODO_REQUEST',
    text
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO_REQUEST',
    id
})

function* fetchTodoSaga(action) {
    console.log('fetch todo', action);
    const {filter} = action;

    try {
        const response = yield call(api.fetchTodos, filter);
        console.log(response);
        console.log(normalize(response, schema.todos));
        yield put({
            type: 'FETCH_TODOS_SUCCESS',
            filter,
            response: normalize(response, schema.todos)
        })
    } catch(error) {
        yield put({
            type: 'FETCH_TODOS_FAIL',
            filter,
            error: error.message || 'something wrong.'  
        })
    }
}

function* addTodoSaga(action) {
    console.log('add todo', action);
    const {text} = action;

    const response = yield call(api.addTodo, text);
    console.log(response);
    console.log(normalize(response, schema.todo));
    yield put({
        type: 'ADD_TODO_SUCCESS',
        response: normalize(response, schema.todo)
    });
}

function* toggleTodoSaga(action) {
    console.log('toggle todo', action);
    const {id} = action;

    const response = yield call(api.toggleTodo, id);
    yield put({
        type: 'TOGGLE_TODO_SUCCESS',
        response: normalize(response, schema.todo)
    })
}

/**
 * root saga
 * 1.watch fetch todo request
 * 2.watch add todo request
 */
export default function* rootSaga () {
    yield takeEvery('FETCH_TODOS_REQUEST', fetchTodoSaga);
    yield takeEvery('ADD_TODO_REQUEST', addTodoSaga);
    yield takeEvery('TOGGLE_TODO_REQUEST', toggleTodoSaga);
}
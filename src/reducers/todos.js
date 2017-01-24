import todo from './todo.js';
import { combineReducers } from 'redux';
//
// const todos = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return [
//                 ...state,
//                 todo(undefined, action)
//             ]
//         case 'TOGGLE_TODO': {
//             return state.map(t =>
//                 todo(t, action)
//             )
//         }
//         default: return state
//     }
// }

const byId = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
        case 'TOGGLE_TODO':
            return {
                ...state,
                [action.id]: todo(state[action.id], action)
            }
        default:
            return state;
    }
}

const allIds = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.id]
        default:
            return state;
    }
}

const todos = combineReducers({
    byId,
    allIds
})

export default todos;

const getAllTodos = (state) =>
    state.allIds.map( id => state.byId[id]);

export const getVisibleTodos = (state, filter) => {
    const todos = getAllTodos(state)
    switch (filter) {
        case 'all': return todos;
        case 'active':　return todos.filter(t => !t.completed)
        case 'completed': return todos.filter(t => t.completed)
        default: return todos;
    }
}
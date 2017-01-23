import { combineReducers, createStore }from 'redux';

import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js';
import { loadState, saveState } from '../modules/localStorage'

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

/**
 * presistedState capture from local storage
 */
const presistedState = loadState()
const store = createStore(todoApp, presistedState)
store.subscribe(() => {
    const todos = store.getState().todos
    saveState({
        todos
    })
})

export default store;
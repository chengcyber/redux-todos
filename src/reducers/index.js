import { combineReducers, createStore }from 'redux';

import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js';
import { loadState, saveState } from '../modules/localStorage'
import throttle from 'lodash/throttle';

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

/**
 * presistedState capture from local storage
 */
const presistedState = loadState()
const store = createStore(todoApp, presistedState)
/**
 * Throttle here to prevent expensive JSON.stringify in saveState() more often than 1 sec
 */
store.subscribe(throttle(() => {
    const todos = store.getState().todos
    saveState({
        todos
    })
}), 1000)

export default store;
import * as Redux from 'redux';

import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js';

const {combineReducers} =  Redux
const todoApp = combineReducers({
    todos,
    visibilityFilter
})

const {createStore} = Redux

const store = createStore(todoApp)

export default store;
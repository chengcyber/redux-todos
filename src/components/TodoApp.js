import React, { Component } from 'react';
import store from '../reducers/index.js';

import TodoEntry from './TodoEntry.js'
import TodoList from './TodoList.js';
import Footer from './Footer.js'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL': return todos;
        case 'SHOW_ACTIVE':　return todos.filter(t => !t.completed)
        case 'SHOW_COMPLETED': return todos.filter(t => t.completed)
        default: return todos;
    }
}

export default class TodoApp extends Component {

    render () {
        const todos = store.getState().todos
        const filter = store.getState().visibilityFilter
        console.log(todos)

        const visibleTodos = getVisibleTodos(todos, filter)

        return (
        <div>
            <TodoEntry store={store} />
            <TodoList store={store} todos={visibleTodos} />
            <Footer store={store} />
        </div>
        )
    }

}
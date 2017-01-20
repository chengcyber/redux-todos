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

let newTodoId = 0;

const App = ({
    todos,
    visibilityFilter
}) => {

        return (
        <div>
            <TodoEntry
                onAddClick={ text => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        id: newTodoId++,
                        text
                    })
                    }
                }
            />
            <TodoList
                store={store}
                todos={getVisibleTodos(todos, visibilityFilter)}
                onTodoClick={ (id) => {
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    })
                }}
            />
            <Footer store={store} />
        </div>
        )


 }

export default App;
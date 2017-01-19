import React from 'react';
import TodoItem from './TodoItem.js';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL': return todos;
        case 'SHOW_ACTIVE':　return todos.filter(t => !t.completed)
        case 'SHOW_COMPLETED': return todos.filter(t => t.completed)
        default: return todos;
    }
}

const TodoList = ({
    store
}) => {
    const todos = store.getState().todos
    const filter = store.getState().visibilityFilter
    const visibleTodos = getVisibleTodos(todos, filter)
    return (
        <ul>
            {visibleTodos.map( (todo, index) =>
                <TodoItem key={index}
                          todo={todo}
                          store={store}
                />
            )}
        </ul>
    )
}

export default TodoList;
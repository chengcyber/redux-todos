import React from 'react';
import TodoItem from './TodoItem.js';

const TodoList = ({
    todos,
    store
}) => {
    return (
        <ul>
            {todos.map( (todo, index) =>
                <TodoItem key={index}
                          todo={todo}
                          store={store}
                />
            )}
        </ul>
    )
}

export default TodoList;
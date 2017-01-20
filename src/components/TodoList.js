import React from 'react';
import TodoItem from './TodoItem.js';



const TodoList = ({
    store,
    todos,
    onTodoClick
}) => {

    return (
        <ul>
            {todos.map( (todo, index) =>
                <TodoItem key={index}
                          {...todo}
                          store={store}
                          onClick={ () => { onTodoClick(todo.id) }}
                />
            )}
        </ul>
    )
}

export default TodoList;
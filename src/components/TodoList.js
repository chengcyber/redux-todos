import React from 'react';
import TodoItem from './TodoItem.js';



const TodoList = ({
    todos,
    onTodoClick
}) => {

    return (
        <ul>
            {todos.map( (todo, index) =>
                <TodoItem key={index}
                          {...todo}
                          onClick={ () => { onTodoClick(todo.id) }}
                />
            )}
        </ul>
    )
}

export default TodoList;
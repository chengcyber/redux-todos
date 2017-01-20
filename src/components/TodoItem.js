import React, {Component} from 'react';


const TodoItem = ({
    text,
    completed,
    onClick
}) => {
    const liStyle = {
        textDecoration: completed ? 'line-through' : ''
    }
    return (
        <div>
            <li style={liStyle} onClick={onClick}>{text}</li>
        </div>
    )
}

export default TodoItem;


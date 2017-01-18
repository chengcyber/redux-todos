import React from 'react';

let newTodoId = 0;

const TodoEntry = ({
    store,
}) => {
    let input;
    return (
        <div>
            <input ref={node => { input = node }}
                   placeholder="Enter new task"/>
            <button onClick={ () => {
                store.dispatch({
                    type: 'ADD_TODO',
                    id: newTodoId++,
                    text : input.value
                });
                input.value = ''
            }
            }>Create</button>
        </div>
    )
}

export default TodoEntry;
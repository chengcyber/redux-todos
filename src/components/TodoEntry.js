import React from 'react';



const TodoEntry = ({
    onAddClick
}) => {
    let input;
    return (
        <div>
            <input ref={node => { input = node }}
                   placeholder="Enter new task"/>
            <button onClick={ () => {
                onAddClick(input.value);
                input.value = '';
            }
            }>Create</button>
        </div>
    )
}

export default TodoEntry;
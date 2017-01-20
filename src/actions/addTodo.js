let newTodoId = 0;

const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: newTodoId++,
        text
    }
}

export default addTodo;
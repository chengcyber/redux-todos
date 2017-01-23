import { v4 } from 'node-uuid';

const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: v4(),
        text
    }
}

export default addTodo;
import { v4 } from 'node-uuid';

/**
 * Using node.uuid v4 method to generate unique id
 */
const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: v4(),
        text
    }
}

export default addTodo;
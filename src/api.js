import { v4 } from 'node-uuid';

/**
 * Implement a fake in-memory database
 */

const fakeDB = {

    todos: [
        {
            id: v4(),
            text: 'hey',
            completed: true
        },
        {
            id: v4(),
            text: 'ho',
            completed: true
        },
        {
            id: v4(),
            text: 'lets go',
            completed: false
        }
    ]
}

const delay = (ms) => {
    return new Promise( resolve => setTimeout(resolve, ms))
}

export const fetchTodos = (filter) => {
    return delay(500).then( () => {
        // if (Math.random() > 0.5)
        //     throw new Error('boom')

        switch (filter) {
            case 'all':
                return fakeDB.todos
            case 'active':
                return fakeDB.todos.filter( t => !t.completed)
            case 'completed':
                return fakeDB.todos.filter( t => t.completed)
            default:
                return new Error(`Invalid Filter ${filter}`)
        }
    })
}

export const addTodo = (text) => {
    return delay(500).then( () => {
        const todo = {
            id: v4(),
            text,
            completed: false
        };
        fakeDB.todos.push(todo)
        return todo
    })
}

export const toggleTodo = (id) => {
    return delay(500).then( () => {
        const todo = fakeDB.todos.find( todo => todo.id === id)
        todo.completed = !todo.completed
        return todo
    })
}
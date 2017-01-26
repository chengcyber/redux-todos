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
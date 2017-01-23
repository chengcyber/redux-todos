import todo from './todo.js'

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]
        case 'TOGGLE_TODO': {
            return state.map(t =>
                todo(t, action)
            )
        }
        default: return state
    }
}

export default todos;

export const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'all': return todos;
        case 'active':　return todos.filter(t => !t.completed)
        case 'completed': return todos.filter(t => t.completed)
        default: return todos;
    }
}
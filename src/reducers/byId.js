const byId = (state = {}, action) => {
    // switch (action.type) {
    //     case 'FETCH_TODOS_SUCCESS':
    //         const nextState = { ...state }
    //         action.response.forEach(todo => nextState[todo.id] = todo)
    //         return nextState
    //     case 'ADD_TODO_SUCCESS':
    //         return {
    //             ...state,
    //             [action.response.id]: action.response
    //         }
    //     default:
    //         return state;
    // }

    /** since we have normalize the api response */
    if (action.response) {
        return {
            ...state,
            ...action.response.entities.todos
        }
    }
    return state;
}

export default byId;

export const getTodoById = (state, id) => state[id]
import { combineReducers } from 'redux';
const createList = (filter) => {
    const ids = (state = [], action) => {
        const handleToggle = (state, action) => {
            const { result: toggleId, entities } = action.response
            const { completed } = entities.todos[toggleId]
            const shouldRemove = (
                (completed && filter === 'active') ||
                (!completed && filter === 'completed')
            )
            return shouldRemove? state.filter(id => id !== toggleId) : state
            return state
        }
        // if (action.filter !== filter) return state
        switch (action.type) {
            case 'FETCH_TODOS_SUCCESS':
                return action.filter === filter ?
                    action.response.result :
                    state
            case 'ADD_TODO_SUCCESS':
                return filter !== 'completed' ?
                    [...state, action.response.result] :
                    state
            case 'TOGGLE_TODO_SUCCESS':
                return handleToggle(state, action)
            default:
                return state;
        }
    }

    const isFetching = (state = false, action) => {
        if (action.filter !== filter) return state;
        switch (action.type) {
            case 'FETCH_TODOS_SUCCESS':
                return false;
            case 'FETCH_TODOS_FAIL':
                return false;
            case 'FETCH_TODOS_REQUEST':
                return true;
            default:
                return state;
        }
    }

    const fetchErrorMessage = (state = null, action) => {
        if (action.filter != filter) return state;
        switch (action.type) {
            case 'FETCH_TODOS_FAIL':
                return action.error
            case 'FETCH_TODOS_REQUEST':
            case 'FETCH_TODOS_SUCCESS':
                return null
            default:
                return state
        }
    }

    return combineReducers({
        ids,
        isFetching,
        fetchErrorMessage
    })
}

export default createList

export const getIds = (state) => state.ids

export const getIsFetching = (state) => state.isFetching

export const getFetchErrorMessage = (state) => state.fetchErrorMessage
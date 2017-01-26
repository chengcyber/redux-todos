import { combineReducers } from 'redux';
import byId, { getTodoById } from './byId'
import createList, { getIds } from './createList'

const allIds = createList('all')

const activeIds = createList('active')

const completedIds = createList('completed')

const listByFilter = combineReducers({
    all: allIds,
    active: activeIds,
    completed: completedIds
})

const todos = combineReducers({
    byId,
    listByFilter
})

export default todos;



export const getVisibleTodos = (state, filter) => (
    getIds(state.listByFilter[filter]).map( id =>
        getTodoById(state.byId, id)
    )
)

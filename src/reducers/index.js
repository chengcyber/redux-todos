import { combineReducers } from 'redux';
import byId, * as fromById from './byId'
import createList, * as fromCreateList from './createList'

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
    fromCreateList.getIds(state.listByFilter[filter]).map( id =>
        fromById.getTodoById(state.byId, id)
    )
)

export const getIsFetching = (state, filter) =>
    fromCreateList.getIsFetching(state.listByFilter[filter])
